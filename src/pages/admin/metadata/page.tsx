/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
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
  const { entity }: any = useParams();
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
   * Indicates if data is loading
   * @type {boolean}
   */
  const [loading, setLoading] = React.useState(false);

  /**
   * Parameters for API requests
   * @type {Object}
   */
  const [params, setParams] = React.useState({
    sortBy: "id",
    sortOrder: "desc",
  });

  /**
   * Flag to prevent multiple API calls
   * @type {React.MutableRefObject<boolean>}
   */
  const isFetching = React.useRef(false);

  /**
   * Fetches data for the table
   * @param {Object} dataToFilter Optional parameters to filter data
   */
  const getData = React.useCallback(
    async (dataToFilter: any = params) => {
      if (isFetching.current || !configs) return;

      isFetching.current = true;
      try {
        setLoading(true);
        const { data } = await api.get(configs.services, {
          params: {
            ...dataToFilter,
            type: entity,
          },
        });
        setData(data);
        setParams(dataToFilter);
      } catch (error: any) {
        toast.error(error?.response?.data?.message || error.message);
      } finally {
        setLoading(false);
        isFetching.current = false;
      }
    },
    [configs, entity, params]
  );

  /**
   * Filters table data
   * @param {Object} data Data for filtering
   */
  const filterData = (data: any) => {
    getData({
      ...params,
      dataFilter: data,
    });
  };

  /**
   * Navigate to show page
   * @param {Object} row Selected row data
   */
  const onRowClick = (row: any) => {
    navigate(`show/${row.id}`);
  };

  // Fetch data when `entity` or `configs` change
  React.useEffect(() => {
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
