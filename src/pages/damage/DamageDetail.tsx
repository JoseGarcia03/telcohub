import ComponentCard from "../../components/common/ComponentCard"
import { PageMeta } from "../../components/common/PageMeta"
import { Detail } from "../../components/damage/Detail";

export const DamageDetail = () => {

  return (
    <>
      <PageMeta
        title="TelcoHub | Averías"
        description="Gestiona tus averías. Crea, visualiza y elimina averías desde un panel intuitivo y seguro."
      />
      <ComponentCard title="Detalle de avería">
        <div className="space-y-6">
          <Detail />
        </div>
      </ComponentCard>
    </>
  )
}