import { Fragment, install as _install, render } from "../deps.ts";
import log from "../log.ts";
import ButtonDropDown from "../components/button_drop_down.tsx";
function main() {
  const mountPoint = document.getElementById("mount");
  if (mountPoint) {
    // _install(twindConfig);
    log.setLevel("debug");
    render(
      <App />,
      mountPoint,
    );
  }
}

function App() {
  return (
    <Fragment>
      <main class="container-fluid">
        <div class="flex">
          <button class="secondary flex-3">Hi</button>
          <ButtonDropDown
            label="更多"
            showArrow={false}
            maxWidth={60}
            onSelected={(item) => {
            }}
            menus={[{
              label: "translateTheWholePage",
              value: "translateTheWholePage",
            }, {
              label: "translateToThePageEndImmediately",
              value: "translateToThePageEndImmediately",
            }]}
          />
        </div>
      </main>
    </Fragment>
  );
}

main();
