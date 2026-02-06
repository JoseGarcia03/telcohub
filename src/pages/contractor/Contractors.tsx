import { useEffect } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { PageMeta } from "../../components/common/PageMeta";
import { ContractorTable } from "../../components/tables/contractor/ContractorTable";
import { useAppDispatch } from "../../hooks/useRedux";
import { getContractors } from "../../helpers/contractor";

export const Contractors = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContractors())
  }, [dispatch])

  return (
    <>
      <PageMeta
      title="TelcoHub | Contratistas"
      description="Gestiona fácilmente los contratistas de tu organización: crea, visualiza y elimina registros desde un panel intuitivo y seguro. FULLDATA simplifica tu administración."
      />
      <PageBreadcrumb pageTitle="Contratistas" />
      <div className="space-y-6">
        <ComponentCard title="Contratistas" desc="Gestiona los contratistas de tu organización">
          <ContractorTable />
        </ComponentCard>
      </div>
    </>
  )
};