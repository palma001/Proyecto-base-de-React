/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import QTable from "../../../../components/Dynamic/QTable";
import { BiPlus } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { config } from "../configs";
import { Button } from "@nextui-org/react";
import { toast } from "sonner";
import { get } from "../../../../libs/axios";
import Loading from "../../../../components/ui/Loading";

export default function Metadata() {
  /**
   * Get config by id
   * @type {string}
   */
  const { entity } = useParams();
  /**
   * Get config by id
   * @type {TableConfigProps}
   */
  const configs = config[entity];
  /**
   * Navigate to add page
   */
  const navigate = useNavigate();
  /**
   * Data of table
   * @type {Array}
   */
  const [data, setData] = React.useState([]);
  /**
   * Data of table
   * @type {Array}
   */
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setData([]);
    getData();
  }, [entity]);
  /**
   * Get data from api
   * @returns {Promise<void>}
   */
  async function getData() {
    try {
      setLoading(true);
      const { data, status, message } = await get(`admin/${entity}`, {
        params: {
          sortBy: "id",
          sortOrder: "desc",
        },
      });
      if (!status) {
        toast.error(message);
        return;
      }
      setData(data);
      console.log(message);
    } catch (error) {
      toast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }
  /**
   * Navigate to show page
   * @param {Object} row
   */
  const onRowClick = (row) => {
    navigate(`show/${row.id}`);
  };

  return (
    <div className="md:w-[900px] sm:w-[600px] w-[380px] h-[90vh]">
      <div className="flex justify-between items-center">
        <span className="font-semibold">{configs.tableTitle}</span>
        <Button
          size="sm"
          color="primary"
          onPress={() => {
            navigate("add");
          }}
        >
          <BiPlus size={20} />
        </Button>
      </div>
      <div className="mt-4">
        <QTable
          {...configs.table}
          data={data}
          key="user_table"
          onRowClick={onRowClick}
        />
      </div>
      {loading && <Loading />}
    </div>
  );
}
