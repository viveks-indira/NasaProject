// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Arwes } from "arwes";

// import AppLayout from "./pages/AppLayout";
// import { resources } from "./settings";

// // Define a basic theme object
// const theme = {
//   color: {
//     primary: "#00FF00", // Example primary color
//     // Define other theme colors here as needed
//   },
//   // Other theme properties can be added here
// };

// const App = () => {
//   return (
//     <Arwes animate background={resources.background.large} pattern={resources.pattern} theme={theme}>
//       {(anim) => (
//         <Router>
//           <AppLayout show={anim.entered} />
//         </Router>
//       )}
//     </Arwes>
//   );
// };

// export default App;

import React from "react";
import styled from "styled-components";

// Define custom styled components
const CustomContainer = styled.div`
  /* Add your custom container styles here */
`;

const CustomHeader = styled.header`
  /* Add your custom header styles here */
`;

const CustomContent = styled.div`
  /* Add your custom content styles here */
`;

const CustomFooter = styled.footer`
  /* Add your custom footer styles here */
`;

// Define the custom component
const CustomArwes = ({ children, background, pattern }) => {
  return (
    <CustomContainer style={{ background, pattern }}>
      <CustomHeader>{children[0]}</CustomHeader>
      <CustomContent>{children[1]}</CustomContent>
      <CustomFooter>{children[2]}</CustomFooter>
    </CustomContainer>
  );
};

// Usage example:
const App = () => {
  return (
    <CustomArwes background="#000" pattern="squiggles">
      <header>This is the header</header>
      <div>This is the content</div>
      <footer>This is the footer</footer>
    </CustomArwes>
  );
};

export default App;
