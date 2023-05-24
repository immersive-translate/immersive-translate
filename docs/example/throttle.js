import { default as throttle } from "https://esm.sh/lodash.throttle@4.1.1";

function main() {
  const throttled = throttle(() => {
    console.log("hi");
  }, 1000);

  throttled();
  throttled();
  throttled();
  throttled();
  throttled();
  throttled();
  throttled();
  throttled();
  throttled();
  throttled();
  setTimeout(throttled, 2000);

  // => Logs 'hi' once, every second.
}

main();
