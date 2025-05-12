import type { ReactNode } from "react";
import Pagination from "./Pagination";

export interface DataTableColumn<T> {
  header: string;
  accessor: keyof T;
  render?: (data: T) => ReactNode;
  hidden?: boolean;
}

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  title?: string;
  description?: string;
  actionButton?: ReactNode;
  isLoading?: boolean;
  pagination?: PaginationProps;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

const DataTable = <T extends { id: string }>({
  data,
  columns,
  title,
  description,
  actionButton,
  isLoading = false,
  pagination,
}: DataTableProps<T>) => {
  const visibleColumns = columns.filter((col) => !col.hidden);

  return (
    <div>
      {(title || description || actionButton) && (
        <div className="p-6 flex flex-row items-center">
          {(title || description) && (
            <div>
              {title && <h3 className="text-lg font-semibold">{title}</h3>}
              {description && (
                <p className="text-sm text-gray-600">{description}</p>
              )}
            </div>
          )}
          {actionButton && <div className="ml-auto">{actionButton}</div>}
        </div>
      )}

      <div className={`${title ? "pt-0" : ""} p-6`}>
        <div className="border border-gray-200 bg-white rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {visibleColumns.map((column) => (
                    <th
                      key={column.header}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {isLoading ? (
                  <tr>
                    <td
                      colSpan={visibleColumns.length}
                      className="px-6 py-4 text-center"
                    >
                      Loading...
                    </td>
                  </tr>
                ) : data.length === 0 ? (
                  <tr>
                    <td
                      colSpan={visibleColumns.length}
                      className="px-6 py-4 text-center"
                    >
                      No data available
                    </td>
                  </tr>
                ) : (
                  data.map((item) => (
                    <tr key={item.id}>
                      {visibleColumns.map((column) => (
                        <td
                          key={`${item.id}-${column.header}`}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                        >
                          {column.render
                            ? column.render(item)
                            : (item[column.accessor] as ReactNode)}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {pagination && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={pagination.onPageChange}
        />
      )}
    </div>
  );
};

export default DataTable;
