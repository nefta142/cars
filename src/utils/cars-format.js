import Papa from "papaparse";
import { Builder } from "xml2js";
import * as XLSX from "xlsx";

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
        id: car.id,
        brand: car.brand,
        model: car.model,
        year: Number(car.year),
        imageKey: car.imageKey,
    }));
}

export function carsToXML(cars) {
    const builder = new Builder({
        rootName: "cars",
        xmldec: { version: "1.0", encoding: "UTF-8" },
        renderOpts: { pretty: true },
    });

    return builder.buildObject({
        car: cars,
    });
}

export function xmlToCars(text) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "application/xml");

    const parserError = xmlDoc.querySelector("parsererror");
    if (parserError) {
        throw new Error("XML no válido");
    }

    const carNodes = Array.from(xmlDoc.getElementsByTagName("car"));

    return carNodes.map((carNode) => ({
        id: carNode.getElementsByTagName("id")[0]?.textContent?.trim() || "",
        brand: carNode.getElementsByTagName("brand")[0]?.textContent?.trim() || "",
        model: carNode.getElementsByTagName("model")[0]?.textContent?.trim() || "",
        year: Number(carNode.getElementsByTagName("year")[0]?.textContent?.trim() || 0),
        imageKey: carNode.getElementsByTagName("imageKey")[0]?.textContent?.trim() || "",
    }));
}

export function exportCarsToXLSX(cars, fileName = "cars.xlsx") {
    const worksheet = XLSX.utils.json_to_sheet(cars);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Cars");
    XLSX.writeFile(workbook, fileName);
}

export async function xlsxToCars(file) {
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer);
    const firstSheetName = workbook.SheetNames[0];

    if (!firstSheetName) {
        throw new Error("El archivo XLSX no contiene hojas");
    }

    const worksheet = workbook.Sheets[firstSheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

    return data.map((car) => ({
        id: String(car.id || "").trim(),
        brand: String(car.brand || "").trim(),
        model: String(car.model || "").trim(),
        year: Number(car.year || 0),
        imageKey: String(car.imageKey || "").trim(),
    }));
}