let Data = (function () {
  let ins;
  function b() {
    function fetchData(url, callback) {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("sxal goyutyun uni");
          }
          return response.json();
        })
        .then((data) => {
          callback(data);
        })
        .catch((error) => {
          console.error("error fetch", error);
          callback(null);
        });
    }
    return {
      fetchDataUrl: function (url, callback) {
        fetchData(url, callback);
      },
    };
  }

  return {
    instance: function () {
      if (!ins) {
        ins = b();
      }
      return ins;
    },
  };
})();

let data1 = Data.instance();
data1.fetchDataUrl(
  "https://jsonplaceholder.typicode.com/posts",
  function (data) {
    return data;
  }
);

let grup = function (array) {
  return array.reduce((result, item) => {
    const id = item.id;
    if ((result[id] = result[id] || [])) {
      push(item);
    }
    return result;
  }, {});
};
