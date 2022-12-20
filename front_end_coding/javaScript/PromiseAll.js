async function promiseAllUsingAwait(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (value, index) => {
      try {
        const item = await value;
        results[index] = item;
        unresolved--;

        if (unresolved === 0) {
          resolve(results);
          return;
        }
      } catch (error) {
        reject(error);
        return;
      }
    });
  });
}

async function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    const unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach((value, index) => {
      new Promise((resolve) => {
        resolve(value)
          .then((item) => {
            results[index] = item;
            unresolved--;

            if (unresolved === 0) {
              resolve(results);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  });
}
