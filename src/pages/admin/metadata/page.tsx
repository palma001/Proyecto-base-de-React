/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";
import QTable from "../../../components/ui/QTable";
import { useNavigate, useParams } from "react-router";
import { config } from "./configs";
import { toast } from "sonner";
import Loading from "../../../components/ui/Loading";
import NotFoundPage from "../../404/page";
import Drawer from "../../../components/ui/QDrawer";
import { api } from "../../../libs/axios";

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
  const configs = config[entity as keyof typeof config];
  /**
   * Navigate to add page
   */
  const navigate = useNavigate();
  /**
   * Data of table
   * @type {Array}
   */
  const [data, setData] = useState([]);
  /**
   * Indicates if data is loading
   * @type {boolean}
   */
  const [loading, setLoading] = useState(false);

  /**
   * Parameters for API requests
   * @type {Object}
   */
  // const [params, setParams] = useState({
  //   sortBy: "id",
  //   sortOrder: "desc",
  // } as { [key: string]: string });

  /**
   * Flag to prevent multiple API calls
   * @type {React.MutableRefObject<boolean>}
   */
  const isFetching = useRef(false);

  /**
   * Fetches data for the table
   * @param {Object} dataToFilter Optional parameters to filter data
   */
  const getData = useCallback(
    async (dataFilter: any) => {
      if (isFetching.current || !configs) return;

      isFetching.current = true;
      try {
        setLoading(true);
        const { data } = await api.get(configs.services, {
          params: {
            dataFilter,
            type: entity,
          },
        });
        setData(data);
      } catch (error: unknown) {
        toast.error((error as Error)?.message);
      } finally {
        setLoading(false);
        isFetching.current = false;
      }
    },
    [configs, entity]
  );

  /**
   * Filters table data
   * @param {Object} data Data for filtering
   */
  const filterData = (dataFilter: { [key: string]: string }) => {
    getData(dataFilter);
  };

  /**
   * Navigate to show page
   * @param {Object} row Selected row data
   */
  const onRowClick = (row: { id: number }) => {
    navigate(`show/${row.id}`);
  };

  // Fetch data when `entity` or `configs` change
  useEffect(() => {
    getData();
  }, [entity, configs, getData]);

  if (!configs) return <NotFoundPage />;

  return (
    <Drawer config={configs} handlerData={filterData}>
      <QTable
        columns={configs.table.columns}
        data={data}
        key="user_table"
        onRowClick={onRowClick}
      />
      {loading && <Loading />}
    </Drawer>
  );
}
