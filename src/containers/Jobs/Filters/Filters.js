import React from "react";
import Styles from "./Filters.module.scss";
import FilterIcon from "../../../components/Layout/Images/FilterIcon.png";
import Checkbox from "../../../components/UI/Checkbox/Checkbox";

const Filters = () => {
  return (
    <div>
      <section className={Styles.filters}>
        <div className={Styles.filterborderbottom}>
          <img className={Styles.imgspan} src={FilterIcon} alt="img" />
          <span className={Styles.filterspan}>Filter</span>
        </div>
      </section>
      <React.Fragment>
        <div className={Styles.accordiontitle} />

        <div className={Styles.searchtopmargin}>
          <div className={Styles.recommendedsection}>
            <b>
              <a href="/">
                Recommended Jobs <span>(0)</span>
              </a>
            </b>
          </div>

          {/* <img className={Styles.imgspan} src={SearchIcon} /> */}

          <div className={Styles.countries}>Country</div>
        </div>
        <div className={Styles.checkboxList}>
          <React.Fragment>
            <Checkbox ahmad="checked">All</Checkbox>
            <Checkbox>First Country</Checkbox>
            <Checkbox>Second Country</Checkbox>
            <Checkbox> Third Country</Checkbox>
            <Checkbox>Fourth Country</Checkbox>
          </React.Fragment>
        </div>

        {/* More Options for Country */}
        <div className={`${Styles.select} ${Styles.m10y} `}>
          <select
            className={`${Styles.input} ${Styles.isSmall} ${Styles.jsSubmit}`}
            name="filters[jb_location_country_iso][]"
            data-js-facet-name="JB_LOCATION_COUNTRY_ISO"
          >
            <option value disabled className={Styles.tmute}>
              More
            </option>
            <option value="qa">Qatar&nbsp;(516) </option>
            <option value="uk">UK&nbsp;(427) </option>
            <option value="kw">Kuwait&nbsp;(387) </option>
            <option value="de">Germany&nbsp;(166) </option>
            <option value="nl">Netherlands&nbsp;(161) </option>
            <option value="pk">Pakistan&nbsp;(156) </option>
            <option value="lb">Lebanon&nbsp;(107) </option>
            <option value="iq">Iraq&nbsp;(84) </option>
            <option value="ma">Morocco&nbsp;(82) </option>
            <option value="om">Oman&nbsp;(77) </option>
            <option value="ge">Georgia&nbsp;(51) </option>
            <option value="bh">Bahrain&nbsp;(45) </option>
            <option value="lk">Sri Lanka&nbsp;(41) </option>
            <option value="dz">Algeria&nbsp;(21) </option>
            <option value="tr">Turkey&nbsp;(20) </option>
            <option value="tz">Tanzania&nbsp;(14) </option>
            <option value="hu">Hungary&nbsp;(9) </option>
            <option value="id">Indonesia&nbsp;(8) </option>
            <option value="ca">Canada&nbsp;(7) </option>
            <option value="ro">Romania&nbsp;(7) </option>
            <option value="at">Austria&nbsp;(7) </option>
            <option value="tn">Tunisia&nbsp;(7) </option>
            <option value="za">South Africa&nbsp;(6) </option>
            <option value="sd">Sudan&nbsp;(6) </option>
            <option value="sg">Singapore&nbsp;(5) </option>
            <option value="ng">Nigeria&nbsp;(5) </option>
            <option value="sy">Syria&nbsp;(5) </option>
            <option value="ch">Switzerland&nbsp;(5) </option>
            <option value="pt">Portugal&nbsp;(5) </option>
            <option value="ie">Ireland&nbsp;(5) </option>
            <option value="ye">Yemen&nbsp;(5) </option>
            <option value="es">Spain&nbsp;(4) </option>
            <option value="ke">Kenya&nbsp;(4) </option>
            <option value="kz">Kazakhstan&nbsp;(4) </option>
            <option value="pr">Puerto Rico&nbsp;(4) </option>
            <option value="au">Australia&nbsp;(3) </option>
            <option value="fr">France&nbsp;(3) </option>
            <option value="xx">International&nbsp;(3) </option>
            <option value="ao">Angola&nbsp;(3) </option>
            <option value="dk">Denmark&nbsp;(3) </option>
            <option value="it">Italy&nbsp;(3) </option>
            <option value="jp">Japan&nbsp;(3) </option>
            <option value="cr">Costa Rica&nbsp;(3) </option>
            <option value="be">Belgium&nbsp;(3) </option>
            <option value="ly">Libya </option>
          </select>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Filters;
