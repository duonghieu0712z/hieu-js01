const _findWay = (garden, step, path, paths) => {
    for (let i = 0; i < 3; i++) {
        if (garden[step][i] === 0) {
            path.push(i);
            if (path.length === 5) {
                paths.push([...path]);
            } else {
                _findWay(garden, step + 1, path, paths);
            }
            path.pop();
        }
    }
};

const findWay = (garden) => {
    const paths = [];
    _findWay(garden, 0, [], paths);
    return paths;
};

const garden = [
    [0, 1, 1],
    [0, 0, 1],
    [0, 1, 1],
    [0, 0, 0],
    [0, 0, 1],
];
findWay(garden).forEach((value) => console.log(value));
