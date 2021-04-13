function parent() {
    const a = 100;
    const b = 200;

    function child() {
        const b = 300;

        console.log(a);
        console.log(b);
    }

    child();
}

parent();
// child();