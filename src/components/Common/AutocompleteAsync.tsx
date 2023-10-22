import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

type AutocompleteAsyncProps = {
  asyncPromise: Promise<{ data: any }>;
  label: string;
  setValues: ({}: any) => void;
};
// TODO: fix (doesn't set the value)
const AutocompleteAsync = <T extends { name: string }>(
  props: AutocompleteAsyncProps
) => {
  const { asyncPromise, label, setValues } = props;
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<T[]>([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let isMounted = true;

    if (!loading) {
      return undefined;
    }

    const fetchItems = async () => {
      const response = await asyncPromise;

      if (!isMounted) return;
      setOptions(response.data);
    };
    fetchItems();

    return () => {
      isMounted = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      loading={loading}
      id="groupset"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(event: any, newValue: T | null) => {
        setValues(newValue!);
      }}
      getOptionLabel={(option) => option.name}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default AutocompleteAsync;
