function sumOfThreeNum(...elements) {
    return new Promise((resolve, reject) => {
        if (elements.length > 3) {
            reject("Only two ele or less");
        }
        else {
            let sum = 0;
            let i = 0;
            while (i < elements.length) {
                sum += elements[i];
                i++;
            }
            resolve("Sum has calculated" + sum);
        }

    })

}

console.log("promise three sum" + sumOfThreeNum(3, 5, 7));

sumOfThreeElements(4, 5, 6)
    .then(result => console.log(result))
    .catch(error => console.log(error));


function getData() {
    return new Promise((resolve, reject) => {
        fetch('https://api.example.com')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Error fetching data');
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });

}

getData()
    .then(data => console.log(data))
    .catch(error => console.log(error));