import ComponentCard from "../../components/common/ComponentCard"
import { PageMeta } from "../../components/common/PageMeta"
import { FormContractor } from "../../components/contractors/FormContractor"

export const AddContractor = () => {
  return (
    <>
      <PageMeta
        title="TelcoHub | Agregar Contratista"
        description="Agrega un nuevo contratista a tu organización de manera fácil y rápida. Completa el formulario con los datos del contratista y su cuadrilla."
      />
      <div className="space-y-6">
        <ComponentCard
          title="Agregar Contratista"
          desc="Completa el formulario para agregar un nuevo contratista"
        >
          <FormContractor />
        </ComponentCard>
      </div>
    </>
  )
}