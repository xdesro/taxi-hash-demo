import { Core, Transition } from "@unseenco/taxi";
const colors = ["red", "orange", "goldenrod", "green", "blue", "purple"];

class MyTransition extends Transition {
  onLeave({ from, trigger, done }) {
    // do something ...
    console.log("playing transition.onLeave");
    done();
  }
  onEnter({ to, trigger, done }) {
    // do something else ...
    console.log("playing transition.onEnter");
    // idk something random to make it more clear transition is happening or not
    to.style.color = colors[Math.floor(Math.random() * 6)];
    done();
  }
}

const t = new Core({
  transitions: {
    default: MyTransition,
  },
});
