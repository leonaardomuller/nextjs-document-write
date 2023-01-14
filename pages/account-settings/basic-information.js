import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";
import AccountSettingsLayout from "../../components/AccountSettingsLayout";
import { generateDocument } from "../../utils/generateDocument";
import React, { useEffect, useState } from "react";

const BasicInformation = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [descricao, setDescricao] = useState("");
  useEffect(() => {
    console.log(nome, sobrenome, telefone, descricao);
  }, [nome, sobrenome, telefone, descricao]);
  return (
    <SiteLayout>
      <AccountSettingsLayout>
        <div>
          <div className="pt-6 pb-8 sm:pt-8">
            <p className="text-sm text-gray-700">
              Set your login preferences, help us personalize your experience
              and make big account changes here.
            </p>
            <div className="mt-6">
              <div className="max-w-4xl mx-auto">
                <label className="block">
                  <span className="block font-medium text-sm text-gray-900 leading-tight">
                    Nome
                  </span>
                  <div className="mt-2">
                    <input
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      type="text"
                      className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      placeholder="John"
                    />
                  </div>
                </label>

                <label className="block mt-5">
                  <span className="block font-medium text-sm text-gray-900 leading-tight">
                    Sobrenome
                  </span>
                  <div className="mt-2">
                    <input
                      value={sobrenome}
                      onChange={(e) => setSobrenome(e.target.value)}
                      type="text"
                      className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </label>

                <label className="block mt-5">
                  <span className="block font-medium text-sm text-gray-900 leading-tight">
                    Telefone
                  </span>
                  <div className="mt-2">
                    <input
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      type="text"
                      className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      placeholder="(DD) 90000-0000"
                    />
                  </div>
                </label>

                <label className="block mt-5">
                  <span className="block font-medium text-sm text-gray-900 leading-tight">
                    Descrição
                  </span>
                  <div className="mt-2">
                    <input
                      value={descricao}
                      onChange={(e) => setDescricao(e.target.value)}
                      type="text"
                      className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      placeholder="I'm fuckin good"
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-200 px-0 py-5 flex justify-end">
            <button
              type="button"
              className="px-4 py-3 leading-none font-semibold rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="button"
              className="ml-4 px-6 py-3 leading-none font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
              onClick={() =>
                generateDocument(nome, sobrenome, telefone, descricao)
              }
            >
              Save
            </button>
          </div>
        </div>
      </AccountSettingsLayout>
    </SiteLayout>
  );
};

export default BasicInformation;
