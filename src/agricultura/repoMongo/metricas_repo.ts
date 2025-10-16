import { CultivoModel } from "agricultura/Models/cultivo.mongo";

export class MetricCultivo {
  async getMetricForType() {
    const metric = await CultivoModel.aggregate([
      {
        $group: {
          _id: "$tipo_cultivo",
          totalGanancias: { $sum: "$ganancias_totales" },
          totalCostos: {
            $sum: {
              $add: [
                { $ifNull: ["$costo_semillas", 0] },
                { $ifNull: ["$costo_fertilizantes", 0] },
                { $ifNull: ["$costo_gasoil", 0] },
                { $ifNull: ["$pesticida_costo_por_aplicacion", 0] },
              ],
            },
          },
        },
      },
      {
        $addFields: {
          utilidadNeta: { $subtract: ["$totalGanancias", "$totalCostos"] },
        },
      },
    ]);
    return metric;
  }
}
