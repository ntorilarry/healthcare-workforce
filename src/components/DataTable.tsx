import type { ReactNode } from "react";
import Pagination from "./Pagination";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { FaEllipsis } from "react-icons/fa6";

export interface DataTableColumn<T> {
  header: string;
  accessor: keyof T;
  render?: (data: T) => ReactNode;
  hidden?: boolean;
}

interface ActionItem {
  label: string;
  onClick: (data: unknown) => void;
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
  headerAction?: ReactNode;
  isLoading?: boolean;
  pagination?: PaginationProps;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  actions?: ActionItem[] | ((data: T) => ActionItem[]);
}

const DataTable = <T extends { id: string }>({
  data,
  columns,
  title,
  description,
  headerAction,
  isLoading = false,
  pagination,
  actions,
}: DataTableProps<T>) => {
  const visibleColumns = columns.filter((col) => !col.hidden);

  const renderActionsMenu = (item: T) => {
    if (!actions) return null;

    const actionItems = typeof actions === "function" ? actions(item) : actions;

    if (actionItems.length < 3) {
      return (
        <div className="flex space-x-2">
          {actionItems.map((action, index) => (
            <button
              key={index}
              onClick={() => action.onClick(item)}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              {action.label}
            </button>
          ))}
        </div>
      );
    }

    return (
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="h-8 w-8">
          <FaEllipsis className="h-4 w-4" />
          <span className="sr-only">Actions</span>
        </MenuButton>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 z-50 mt-2 w-36 origin-top-right border border-black/10 rounded-md bg-white  focus:outline-none">
            <div className="px-1 py-1">
              <MenuItem>
                <div className="px-3 py-1.5 text-sm font-medium">Actions</div>
              </MenuItem>
              <div className="border-t border-neutral-200" />
              {actionItems.map((action, index) => (
                <MenuItem key={index}>
                  {({ active }) => (
                    <button
                      onClick={() => action.onClick(item)}
                      className={`${
                        active ? "bg-gray-100" : ""
                      } group flex w-full items-center rounded-md px-3 py-1.5 text-sm`}
                    >
                      {action.label}
                    </button>
                  )}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    );
  };

  return (
    <div>
      {(title || description || headerAction) && (
        <div className="p-6 flex flex-row items-center">
          {(title || description) && (
            <div>
              {title && <h3 className="text-lg font-semibold">{title}</h3>}
              {description && (
                <p className="text-sm text-gray-600">{description}</p>
              )}
            </div>
          )}
          {headerAction && <div className="ml-auto">{headerAction}</div>}
        </div>
      )}

      <div className={`${title ? "pt-0" : ""} p-6`}>
        <div className="border border-neutral-200 bg-white rounded-md overflow-hidden">
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
                  {actions && (
                    <th scope="col" className="relative px-6 py-3"></th>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {isLoading ? (
                  <tr>
                    <td
                      colSpan={visibleColumns.length + (actions ? 1 : 0)}
                      className="px-6 py-4 text-center"
                    >
                      Loading...
                    </td>
                  </tr>
                ) : data.length === 0 ? (
                  <tr>
                    <td
                      colSpan={visibleColumns.length + (actions ? 1 : 0)}
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
                      {actions && (
                        <td className="px-4 py-3 text-right">
                          {renderActionsMenu(item)}
                        </td>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
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
    </div>
  );
};

export default DataTable;
