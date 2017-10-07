class Requester {
    get(url) {
        var promise = new Promise(function (resolve, reject) {
            $.ajax({
                url,
                method: "GET",
                success(response) {
                    resolve(response);
                }
            });
        });

        return promise;
    }
}

let requester = new Requester();
export { requester };