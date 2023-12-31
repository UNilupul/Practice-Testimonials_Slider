(function () {
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-txt');

    const btn = document.querySelectorAll('.btn');
    let index = 0;
    let customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text) {
        let images = `./images/${img}.jpeg`;
        let customer = new Customer(images, name, text);

        customers.push(customer);
    }

    createCustomer(0, 'John', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
    createCustomer(1, 'Amy', 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');
    createCustomer(2, 'Vikum', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. ');
    createCustomer(3, 'Sakuni', 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).');
    createCustomer(4, 'Kasun', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.');


    btn.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('prevbtn')) {
                if (index === 0) {
                    index = customers.length;
                }
                index--
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
            }

            if (e.target.parentElement.classList.contains('nextbtn')) {
                index++
                if (index === customers.length) {
                    index = 0;
                }
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
            }
        })
    })

})()