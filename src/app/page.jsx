"use client"

import Formulario from "./components/Formulario";
import PDF from "./components/PDF";
import { PDFDownloadLink } from "@react-pdf/renderer";


export default function Home() {
  return (
    <>
      <div>
        <Formulario>
          <input
            className="mt-2 mb-2 p-2"
            type="text"
            placeholder="nombre"
            name="nombre"
          />
          <input
            className="mt-2 mb-2 p-2"
            type="text"
            placeholder="apellido"
            name="apellido"
          />
          <input
            className="mt-2 mb-2 p-2"
            type="tel"
            placeholder="Telefono"
            name="Telefono"
          />
          <input
            className="mt-2 mb-2 p-2"
            type="date"
            placeholder="fecha"
            name="fecha"
          />
          <input
            className="bg-slate-400 py-1 px-5 block text-white"
            type="submit"
            placeholder="Enviar"
          />
        </Formulario>



        <Formulario>
          <PDFDownloadLink
            document={PDF}
            fileName="Prueba.pdf"
          ></PDFDownloadLink>


        </Formulario>


      </div>
    </>
  );
}
