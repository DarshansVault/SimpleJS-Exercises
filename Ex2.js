function describe(value) {
  var disobj = { isNull: false, isTruthy: true, isNan: false };
  disobj["type"] = typeof value;
  if (value === null) {
    disobj["isNull"] = true;
  }
  if (Number.isNaN(value)) {
    disobj["isNan"] = true;
  }
  if (value === false) {
    disobj["isTruthy"] = false;
  }
  console.table(disobj);
}

describe(42);
describe("hello");
describe(null);
describe(undefined);
describe([]);
describe({});
describe(0);
describe(Symbol("id"));
describe(NaN);
