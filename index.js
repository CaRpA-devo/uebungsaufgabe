import { question, questionInt, keyInSelect, keyInYN } from "readline-sync";

const userName = question(" Wie ist dein Name ?");

console.log(`Hallo ${userName}! Hier sind unsere Produkte:`);

const products = [
    "Laptop-999.99 €",
    "Smartphone-499.99 €",
    "Kopfhörer-99.99 €",
    "Monitor-199.99 €",
    "Camera-399.99 €",
    "PS5-699.99 €",
    "Tv-799.99 €",
    "Laufwerk-999.99 €",
    "Tastatur-9.99 €",
    "Mauspad-399",
];

const whichProduct = keyInSelect(
    products,
    "Bitte gib die Nummer des gewünschten Produkts ein:"
);

if (whichProduct === -1) {
    console.log("Fehler: Ungültige Produktauswahl!");
} else {
    const selectedProduct = products[whichProduct];

    const [productName, productPrice] = selectedProduct.split("-");

    const price = parseFloat(productPrice.replace("€", ""));

    const howMuch = questionInt("Wie viele möchtest du kaufen?");

    const totalPrice = price * howMuch;

    if (totalPrice > 1000) {
        const rabatt = totalPrice * 0.1;

        const rabattPrice = (totalPrice - rabatt).toFixed(2);

        console.log(
            `${userName}, du hast ${howMuch}x ${productName} bestellt. Ursprünglicher Preis: ${totalPrice.toFixed(
                2
            )}€. Du erhältst 10% Rabatt. Reduzierter Preis: ${rabattPrice}€`
        );
    } else {
        console.log(
            `${userName}, du hast ${howMuch}x ${productName} bestellt. Gesamtpreis: ${totalPrice.toFixed(
                2
            )}€`
        );
    }
}
