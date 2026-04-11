import Papa from "papaparse";
import { Builder, parseStringPromise } from "xml2js";

export function downloadFile(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(url);
}

export function carsToJSON(cars) {
    return JSON.stringify(cars, null, 2);
}

export function jsonToCars(text) {
    const parsed = JSON.parse(text);
    return Array.isArray(parsed) ? parsed : [];
}

export function carsToCSV(cars) {
    return Papa.unparse(cars);
}

export function csvToCars(text) {
    const result = Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
    });

    return result.data.map((car) => ({
        ...car,
        year: Number(car.year),
    }));
}

export function carsToXML(cars) {
    const builder = new Builder({
        rootName: "cars",
        xmldec: { version: "1.0", encoding: "UTF-8" },
    });

    return builder.buildObject({
        car: cars,
    });
}

export async function xmlToCars(text) {
    const parsed = await parseStringPromise(text, {
        explicitArray: false,
    });

    const items = parsed?.cars?.car || [];
    const cars = Array.isArray(items) ? items : [items];

    return cars.map((car) => ({
        ...car,
        year: Number(car.year),
    }));
}