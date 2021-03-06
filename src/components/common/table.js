import React from "react";
import { Table } from "react-bootstrap";
// import { Pagination } from "../index";

const CustomTable = ({
  tableClass,
  headers,
  children,
  pageCount,
  onPageChange,
  activePage,
  countText,
  totalItemsCount,
  pageTextHidden,
}) => {
  return (
    <div>
      <div className="table-parent">
        <Table className={tableClass} hover>
          <thead>
            <tr>
              {headers.map(
                (
                  { icons, label, className, component, onHeaderClick },
                  index
                ) => (
                  <th key={index} className={className} onClick={onHeaderClick}>
                    <span>{component || label}</span>
                    {icons &&
                      icons.map((icon, index) => (
                        <i
                          key={index}
                          className={icon.className}
                          onClick={icon.onClick}
                        />
                      ))}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {children || (
              <tr className="no-data-msg">
                <td colSpan={headers && headers.length}>
                  {"messages.noData"}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      {/* {children && pageCount > 1 && (
        <Pagination
          page={activePage}
          pageText={countText}
          onPageChange={onPageChange}
          totalItemCount={totalItemsCount}
          totalPages={pageCount}
          color="grey"
          pageTextHidden={pageTextHidden}
        />
      )} */}
    </div>
  );
};

export default CustomTable;
