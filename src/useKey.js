import { useEffect } from "react";

export function useKey(key, action) {
  //Using useEffect here for keypress event
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          //   onCloseMovie();
          action();
        }
      }
      document.addEventListener("keydown", callback);

      //Cleanup function
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
}
