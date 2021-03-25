function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs.trim());
  }
}

function printAll2(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (!strs) return;
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else {
    console.log(strs.trim());
  }
}