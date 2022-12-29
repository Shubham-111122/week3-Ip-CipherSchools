const pencil = {
  name: "A Pencil Box",
  size: 30,
  color: "red",
  zipLength: {
    left: 12,
    right: 12,
    top: 24,
  },
  zipOpen: false,
  toggleZip: function (zipStatus) {
    this.zipOpen = zipStatus;
  },
};
console.log(pencil);
console.log(pencil.color);
console.log(pencil.zipLength.left);
var sizeValue = "size";
console.log(pencil[sizeValue]);
console.log(pencil.toggleZip(true));
