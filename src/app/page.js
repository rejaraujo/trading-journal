import { HomePage } from ".";

export default function App() {
  //title the page
  // useEffect(() => {
  //   document.title = "Trading Journal - HomePage";
  // }, []);

  return (
    // <ThemeProvider theme={theme}>
    <>
      {/* <Link href="/home"> */}
      <HomePage />
      {/* </Link> */}
    </>
    // </ThemeProvider>
  );
}
