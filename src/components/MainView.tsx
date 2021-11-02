import React from "react"

interface CatPhotoSection {
    source: string;
}

export const MainView: React.FC<CatPhotoSection> = ({source}) => {
    return (
        <main className="w-screen h-screen grid text-center justify-center">
            <section className="main-title mb-5" style={{marginTop: '25%'}}>
                <h1 className="text-5xl font-bold">Random Cat Getter</h1>
                <p className="mt-2 text-gray-400">Based in <a className="text-blueGray-300 transition duration-300 w-max border-b border-blueGray-300 border-opacity-0 hover:border-opacity-80" href="https://public-apis.io/random-cat-animals-api" target="_blank" rel="noreferrer">Random Cat Public API</a></p>
            </section>
            <section className="m-auto w-50">
                <img className="rounded-lg" style={{maxWidth: "500px", maxHeight: "350px", objectFit: "contain"}} src={source} alt="A random cat" />
            </section>
        </main>
    )
}