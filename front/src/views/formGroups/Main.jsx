import { Lucide, TomSelect, Tippy } from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useState } from "react";

function Main() {
  const [categories, setCategories] = useState([
    "Photography",
    "christianbale@left4code.com",
    "angelinajolie@left4code.com",
    "brucewillis@left4code.com",
    "nicolascage@left4code.com",
  ]);

  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Form Groups</h2>
        <div className="w-full sm:w-auto flex flex-wrap gap-y-3 mt-4 sm:mt-0">
          <button className="btn btn-primary shadow-md mr-2">
            <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New Groups
          </button>
        </div>
      </div>
      {/* BEGIN: Filter */}
      <div className="intro-y box p-5 mt-7 flex flex-col xl:flex-row gap-y-3">
        <div className="form-inline flex-1 flex-col xl:flex-row items-start xl:items-center gap-y-2 xl:mr-6">
          <label htmlFor="crud-form-1" className="form-label">
            Users Name
          </label>
          <input
            id="crud-form-1"
            type="text"
            className="form-control w-full"
            placeholder="Product name.."
          />
        </div>
        <div className="flex-1"></div>

        <div className="flex-1"></div>
        <button className="btn btn-primary shadow-md">
          <Lucide icon="Search" className="w-4 h-4 mr-2" /> Filter
        </button>
      </div>
      {/* END: Filter */}
      {/* BEGIN: Data List */}
      <div className="intro-y overflow-auto lg:overflow-visible">

        <h1 className="text-center text-xl py-5">Comming Soon...</h1>
        <table className="table table-report">
          <tbody>
           
          </tbody>
        </table>
      </div>
      {/* END: Data List */}
      {/* BEGIN: Pagination */}
      <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-5 mb-12">
        <nav className="w-full sm:w-auto sm:mr-auto">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                <Lucide icon="ChevronsLeft" className="w-4 h-4" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <Lucide icon="ChevronLeft" className="w-4 h-4" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <Lucide icon="ChevronRight" className="w-4 h-4" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <Lucide icon="ChevronsRight" className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </nav>
        <select className="w-20 form-select box mt-3 sm:mt-0">
          <option>10</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </select>
      </div>
      {/* END: Pagination */}
    </>
  );
}

export default Main;
