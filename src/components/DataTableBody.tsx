import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { useTable, useFilters, useGlobalFilter, useSortBy } from "react-table";
import Pagination from "./Pagination";

const DataTable = ({
  columns,
  data,
  isLoading,
  pagination,
  currentPage,
  onPageChange,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useFilters, useGlobalFilter, useSortBy);
  return (
    <div>
      <div className="w-full mx-auto">
        <div className="flex flex-col">
          <div className="-m-2 overflow-x-auto overflow-y-visible">
            <div className="p-2 min-w-full inline-block align-middle">
              <div className="bg-white border-t-0 border border-gray-200 dark:border-neutral-700 rounded-b-xl overflow-hidden dark:bg-neutral-800">
                <table
                  {...getTableProps()}
                  className="min-w-full divide-y bg-white dark:bg-neutral-800 divide-gray-200 dark:divide-neutral-700"
                >
                  <thead className="">
                    {headerGroups.map((headerGroup, index) => (
                      <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column, columnIndex) => {
                          const { key, ...restHeaderProps } =
                            column.getHeaderProps(
                              column.getSortByToggleProps()
                            );
                          return (
                            <th
                              key={key || columnIndex} // Use the key from headerProps if it exists, otherwise fallback to columnIndex
                              {...restHeaderProps}
                              scope="col"
                              className="px-6 py-3 text-start"
                            >
                              <div className="flex items-center justify-between gap-x-2">
                                <span className="text-sm font-normal text-gray-600 dark:text-neutral-200">
                                  {column.render("Header")}
                                </span>
                                <span>
                                  {column.isSorted ? (
                                    column.isSortedDesc ? (
                                      <FaSortDown className="w-4 h-4 text-gray-400" />
                                    ) : (
                                      <FaSortUp className="w-4 h-4 text-gray-400" />
                                    )
                                  ) : (
                                    <FaSort className="w-4 h-4 text-gray-400  group-hover:opacity-100" />
                                  )}
                                </span>
                              </div>
                            </th>
                          );
                        })}
                      </tr>
                    ))}
                  </thead>

                  <tbody
                    {...getTableBodyProps()}
                    className="divide-y divide-gray-200 dark:divide-neutral-700"
                  >
                    {isLoading ? (
                      Array.from({ length: 5 }).map((_, index) => (
                        <tr key={index} className="animate-pulse">
                          {columns.map((_, colIndex) => (
                            <td
                              key={colIndex}
                              className="px-6 py-4 whitespace-nowrap"
                            >
                              <div className="h-4 bg-gray-200 rounded dark:bg-neutral-700"></div>
                            </td>
                          ))}
                        </tr>
                      ))
                    ) : rows.length > 0 ? (
                      rows.map((row, rowIndex) => {
                        prepareRow(row);
                        return (
                          <tr key={rowIndex} {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                              const { key, ...cellProps } = cell.getCellProps();

                              // Check if the column header is "description"
                              if (
                                cell.column.Header === "Description" ||
                                cell.column.Header === "Title"
                              ) {
                                return (
                                  <td key={key} className="h-px w-72 min-w-72">
                                    <a className="block relative z-10" href="#">
                                      <div className="px-6 py-2">
                                        <p className="text-xs text-gray-800 dark:text-neutral-200">
                                          {cell.render("Cell")}
                                        </p>
                                      </div>
                                    </a>
                                  </td>
                                );
                              }

                              // Default rendering for other columns
                              return (
                                <td
                                  key={key}
                                  {...cellProps}
                                  className="px-6 py-4 whitespace-nowrap"
                                >
                                  <div className="block">
                                    <span className="block text-xs font-normal text-gray-800 dark:text-neutral-200">
                                      {cell.render("Cell")}
                                    </span>
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan={columns.length}
                          className="text-center dark:text-white py-5 font-bold"
                        >
                          No data records
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Pagination
            currentPage={currentPage}
            totalPages={pagination?.totalPage || 1}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
