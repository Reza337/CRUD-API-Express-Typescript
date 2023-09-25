import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/connection";

interface ProvincesAttributes {
	id?: number;
	nama_provinsi?: string | null;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface ProvincesInput extends Optional<ProvincesAttributes, "id"> {}
export interface ProvincesOutput extends Required<ProvincesAttributes> {}

export default class Provinces
	extends Model<ProvincesAttributes, ProvincesInput>
	implements ProvincesAttributes
{
	public id!: number;
	public nama_provinsi!: string | null;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Provinces.init(
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		nama_provinsi: {
			allowNull: false,
			type: DataTypes.STRING,
		},
	},
	{
		timestamps: true,
		sequelize: sequelizeConnection,
	}
);
