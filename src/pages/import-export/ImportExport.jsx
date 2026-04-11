import { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { cars } from "../../data/cars";
import {
    getCarsFromFirestore,
    importCarsToFirestore,
    replaceCarsInFirestore,
} from "../../services/firebase/cars-service";
import {
    carsToJSON,
    jsonToCars,
    carsToCSV,
    csvToCars,
    carsToXML,
    xmlToCars,
    downloadFile,
} from "../../utils/cars-format";
import "./ImportExport.css";

function ImportExport() {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSeedCars = async () => {
        try {
            setLoading(true);
            setStatus("Subiendo coches locales a Firestore...");
            await importCarsToFirestore(cars);
            setStatus("Coches locales subidos correctamente.");
        } catch (error) {
            console.error(error);
            setStatus("Error al subir los coches locales.");
        } finally {
            setLoading(false);
        }
    };

    const handleExportJSON = async () => {
        try {
            setLoading(true);
            setStatus("Exportando JSON...");
            const firestoreCars = await getCarsFromFirestore();
            const json = carsToJSON(firestoreCars);
            downloadFile(json, "cars.json", "application/json");
            setStatus("Archivo JSON exportado correctamente.");
        } catch (error) {
            console.error(error);
            setStatus("Error al exportar JSON.");
        } finally {
            setLoading(false);
        }
    };

    const handleExportCSV = async () => {
        try {
            setLoading(true);
            setStatus("Exportando CSV...");
            const firestoreCars = await getCarsFromFirestore();
            const csv = carsToCSV(firestoreCars);
            downloadFile(csv, "cars.csv", "text/csv;charset=utf-8;");
            setStatus("Archivo CSV exportado correctamente.");
        } catch (error) {
            console.error(error);
            setStatus("Error al exportar CSV.");
        } finally {
            setLoading(false);
        }
    };

    const handleExportXML = async () => {
        try {
            setLoading(true);
            setStatus("Exportando XML...");
            const firestoreCars = await getCarsFromFirestore();
            const xml = carsToXML(firestoreCars);
            downloadFile(xml, "cars.xml", "application/xml");
            setStatus("Archivo XML exportado correctamente.");
        } catch (error) {
            console.error(error);
            setStatus("Error al exportar XML.");
        } finally {
            setLoading(false);
        }
    };

    const handleImportFile = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        try {
            setLoading(true);
            setStatus(`Importando ${file.name}...`);

            const text = await file.text();
            const extension = file.name.split(".").pop().toLowerCase();

            let importedCars = [];

            if (extension === "json") {
                importedCars = jsonToCars(text);
            } else if (extension === "csv") {
                importedCars = csvToCars(text);
            } else if (extension === "xml") {
                importedCars = await xmlToCars(text);
            } else {
                setStatus("Formato no soportado. Usa JSON, CSV o XML.");
                return;
            }

            await replaceCarsInFirestore(importedCars);
            setStatus(`Importación completada: ${importedCars.length} coches cargados.`);
        } catch (error) {
            console.error(error);
            setStatus("Error al importar el archivo.");
        } finally {
            event.target.value = "";
            setLoading(false);
        }
    };

    return (
        <>
            <Header />

            <main className="import-export-page">
                <section className="import-export-card">
                    <h1>Import / Export Cars</h1>
                    <p className="import-export-text">
                        Desde esta página puedes subir los coches locales a Firestore,
                        importar archivos en formato JSON, CSV o XML, y exportar los
                        coches guardados en Firebase.
                    </p>

                    <div className="import-export-block">
                        <h2>Subida inicial</h2>
                        <button
                            className="import-export-btn"
                            onClick={handleSeedCars}
                            disabled={loading}
                        >
                            Subir coches locales a Firestore
                        </button>
                    </div>

                    <div className="import-export-block">
                        <h2>Importar archivo</h2>
                        <label className="file-label">
                            Seleccionar archivo
                            <input
                                type="file"
                                accept=".json,.csv,.xml"
                                onChange={handleImportFile}
                                disabled={loading}
                            />
                        </label>
                    </div>

                    <div className="import-export-block">
                        <h2>Exportar desde Firestore</h2>
                        <div className="button-group">
                            <button
                                className="import-export-btn"
                                onClick={handleExportJSON}
                                disabled={loading}
                            >
                                Exportar JSON
                            </button>

                            <button
                                className="import-export-btn"
                                onClick={handleExportCSV}
                                disabled={loading}
                            >
                                Exportar CSV
                            </button>

                            <button
                                className="import-export-btn"
                                onClick={handleExportXML}
                                disabled={loading}
                            >
                                Exportar XML
                            </button>
                        </div>
                    </div>

                    {status && <p className="status-message">{status}</p>}
                </section>
            </main>

            <Footer />
        </>
    );
}

export default ImportExport;