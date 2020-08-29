import React, { useState } from "react";
import { Container, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import Stepper from "./Stepper";

function App() {
  const theme = useTheme();

  const [formState, setFormState] = useState({});

  const onSubmit = (data) => setFormState((prev) => ({ ...prev, ...data }));

  return (
    <Container>
      <Box
        boxShadow={2}
        borderRadius={6}
        padding={theme.spacing(3, 3)}
        margin={theme.spacing(5, 0)}
      >
        <Stepper {...{ onSubmit }} />
      </Box>
    </Container>
  );
}

export default App;
