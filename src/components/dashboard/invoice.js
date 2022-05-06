import React, { Component } from 'react'
import Url from '../config/url'
import axios from 'axios';
import number from 'number-to-words';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default class Invoice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoad: true,
      isList: false,
      data: [],
      totalCount: 0,
      numberOfPage: 0,
      pagenation: [],
      queryType: '',
      qureyValue: '',
      page: 1
    }
  }

  componentDidMount() {
    const headers = {
      'role': localStorage.getItem('role')
    };
    axios.get(`${Url}/invoice/`,
      {
        headers
      }
    ).then(res => {
      if (res.data.success) {
        this.setState({
          isLoad: res.data.success,
          data: res.data.data,
          totalCount: res.data.cout,
          numberOfPage: res.data.numberOfPage
        });
        for (var i = 1; i <= res.data.numberOfPage; i++) {
          this.setState({
            pagenation: this.state.pagenation.concat(i)
          });
        }
      } else {
        console.log(res.data);
      }
    }).catch(err => {
      // this.logoutAdminPanal(err);
    });
  }

  onChangeType = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  GetDynamicquery = () => {
    this.setState({ isLoad: false, resultPerPage: 0 })
    var { queryType, qureyValue } = this.state;
    const headers = {
      'role': localStorage.getItem('role')
    };
    axios.get(`${Url}/invoice/?page=${1}&${queryType}=${qureyValue}`,
      {
        headers
      }
    ).then(res => {
      if (res.data.success) {
        this.setState({
          isLoad: res.data.success,
          data: res.data.data,
          numberOfPage: res.data.numberOfPage
        });
      } else {
        console.log(res.data);
      }
    }).catch(err => {
      this.logoutAdminPanal(err);
    });
  }

  pagenationToDB = (i) => {
    this.setState({ isLoad: false, page: i });
    const headers = {
      'role': localStorage.getItem('role')
    };
    axios.get(`${Url}/invoice/?page=${i}`,
      {
        headers
      }
    ).then(res => {
      if (res.data.success) {
        this.setState({
          resultPerPage: i != 1 ? (i - 1) * 30 : 0,
          isLoad: res.data.success,
          data: res.data.data,
          numberOfPage: res.data.numberOfPage
        });
      } else {
        console.log(res.data);
      }
    }).catch(err => {
      // this.logoutAdminPanal(err);
    });
  }

  deleteOnShortterms = (x, index) => {
    const isConfirm = window.prompt(`Are you sure Delete ${x.InvoiceNo}`);
    if (isConfirm != null && isConfirm == x.InvoiceNo) {
      const headers = { 'role': localStorage.getItem('role') };
      try {
        axios.delete(`${Url}/invoice/delete/${x.InvoiceNo}`, { headers })
          .then(res => {
            if (res.data.success) {
              this.state.data.splice(index, 1);
              this.setState({
                data: this.state.data
              })
            }
          })
          .catch(err => { console.log('log', err) });
      } catch (error) {
        console.error(error);
      }
    }
  }

  onEditInvoice = (x, i) => {
    this.props.history.push({
      pathname: '/new-invoice',
      data: x
    })
  }

  /* This is for pdf generating*/
  pdfGenerater = async (data) => {
    let ourCompanyAddress = "R.A Industries\nSSV Nagar\nThirukalimedu Main Road\nKanchipuram\n631502";
    let companyName = data.CompanyAddress;
    let buyerGst = '';
    let address = '';
    let companyFullName = '';

    switch (companyName) {
      case "INDO-TECH":
        buyerGst = "33AAAC15775P1Z2";
        companyFullName = 'INDO-TECH TRANSFORMER LTD';
        address = "INDO-TECH TRANSFORMER LTD\nSurvey No. 153-210, Illuppappattu Village,\nNH4, KM 64, CHN-BLR Highway,\nRajakulam Post,\nKancheepuram District.\nTamilnadu State";
        break;
      case "GOOGLE":
        buyerGst = "333AAAA69587452";
        address = "INDO-TECH TRANSFORMER LTD\nSurvey No. 153-210, Illuppappattu Village,\nNH4, KM 64, CHN-BLR Highway,\nRajakulam Post,\nKancheepuram District.\nTamilnadu State";
        break;
      case "FACE-BOOK":
        buyerGst = "KKKKK1453629875";
        address = "INDO-TECH TRANSFORMER LTD\nSurvey No. 153-210, Illuppappattu Village,\nNH4, KM 64, CHN-BLR Highway,\nRajakulam Post,\nKancheepuram District.\nTamilnadu State";
        break;
    }

    let d = new Date();
    let date = d.getFullYear();
    let m = d.getMonth();
    let monthArray = ['JANUARY', 'FEBRRARY', 'MARCH', 'APRIL', 'MAY', 'JUN', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    let month = monthArray[m];

    let tab = data.MaterialsTables;
    let subTotal = 0;
    let subWt = 0;
    let subQty = 0;
    let multiTab = [];
    let multiDc = [];
    multiTab.push([{ text: 'S.No', colSpan: 1, border: [true, true, true, true] }, { text: 'MATERIALS', colSpan: 1, border: [true, true, true, true] }, { text: 'WT', colSpan: 1, border: [true, true, true, true] }, { text: 'W.O', colSpan: 1, border: [true, true, true, true] }, { text: 'SIZE', colSpan: 1, border: [true, true, true, true] }, { text: 'QTY', colSpan: 1, border: [true, true, true, true] }, { text: 'perCost', colSpan: 1, border: [true, true, true, true] }, { text: 'DC', colSpan: 1, border: [true, true, true, true] }, { text: 'SAC', colSpan: 1, border: [true, true, true, true] }, { text: 'COST', colSpan: 1, border: [true, true, true, true] }]);
    multiDc.push([{ text: 'S.No' }, { text: 'WORK' }, { text: 'W.O' }, { text: 'Spec' }, { text: 'DRG NO' }, { text: 'Wt' }, { text: 'QTY' }]);
    for (var i = 0; i < tab.length; i++) {
      subTotal += Number(tab[i].cost);
      subWt += Number(tab[i].wt);
      subQty += Number(tab[i].qty);
      multiTab.push(
        [{ text: `${i + 1}`, colSpan: 1, border: [true, true, true, true] }, { text: `${tab[i].Materials}`, colSpan: 1, border: [true, true, true, true] }, { text: `${tab[i].wt} KGS`, colSpan: 1, border: [true, true, true, true] }, { text: `${tab[i].wo}`, colSpan: 1, border: [true, true, true, true] }, { text: `${tab[i].size}MVA`, colSpan: 1, border: [true, true, true, true] }, { text: `${tab[i].qty} SET`, colSpan: 1, border: [true, true, true, true] }, { text: `${tab[i].perCost}`, colSpan: 1, border: [true, true, true, true] }, { text: `${tab[i].dc}`, colSpan: 1, border: [true, true, true, true] }, { text: `${tab[i].sac}`, colSpan: 1, border: [true, true, true, true] }, { text: `${tab[i].cost}/-`, colSpan: 1, border: [true, true, true, true] }]
      );
      multiDc.push([{ text: `${i + 1}` }, { text: `${tab[i].Materials}` }, { text: `${tab[i].wo}` }, { text: `${tab[i].size}` }, { text: `${tab[i].drgNo}` }, { text: `${tab[i].wt}` }, { text: `${tab[i].qty}` }]);
    }
    multiDc.push([{ text: '', colSpan: 1 }, { text: '', colSpan: 1 }, { text: '', colSpan: 1 }, { text: '', colSpan: 1 }, { text: '', colSpan: 1 }, { text: `${subWt}KGS` }, { text: `${subQty}SET` }]);
    multiTab.push([{ text: '', colSpan: 1, border: [true, true, false, true] }, { text: 'Sub Total', colSpan: 1, border: [true, true, true, true] }, { text: ``, colSpan: 1, border: [true, true, true, true] }, { text: '', colSpan: 1, border: [true, true, false, true] }, { text: '', colSpan: 1, border: [true, true, true, true] }, { text: `${subQty}SET`, colSpan: 1, border: [true, true, true, true] }, { text: '', colSpan: 1, border: [true, true, true, true] }, { text: '', colSpan: 1, border: [true, true, true, true] }, { text: '', colSpan: 1, border: [true, true, true, true] }, { text: `${subTotal}/-`, colSpan: 1, border: [true, true, true, true] }]);

    let iGst = (data.IntegratedGoodAndServicesTax / 100) * subTotal;
    let sGst = (data.StateGoodsAndServicesTax / 100) * subTotal;
    let cGst = (data.CentralGoodsAndServicesTax / 100) * subTotal;
    let allTotal = subTotal + iGst + sGst + cGst;

    var tha = number.toWords(allTotal);
    // tha = tha.replace(/,/g, "");
    tha = tha.replace(/-/g, " ");
    var sp = tha[0].toUpperCase() + tha.slice(1);

    var docDefinition = {
      // userPassword: '123',
      // ownerPassword: '123456',
      // permissions: {
      // printing: 'highResolution', //'lowResolution'
      // modifying: false,
      // copying: false,
      // annotating: true,
      // fillingForms: true,
      // contentAccessibility: true,
      // documentAssembly: true
      // },
      // {
      //   text:'R.A.INDUSTRIES\n',style:'header',link:'http://RAindustries.com'
      // }
      pageSize: 'A4',
      pageMargins: [20, 40, 20, 40],
      watermark: { text: 'R.A INDUSTRIES', color: 'black', opacity: 0.2, bold: true, italics: false, style: 'waterMark' },
      content: [
        {
          text: 'R.A.INDUSTRIES\n', style: 'header', link: 'https://www.raindustries.in'
        },
        {
          text: '(Wooden & Engineering Works)\n\n', style: 'common'
        },
        {
          columns: [{ width: '40%', text: 'EMAIL:\tmanikanchi1992@gmail.com' },
          { width: '20%', text: '' },
          { width: '40%', text: 'MOBILE:\t9940663129,\t9003883939\n\n' }]
        },
        {
          columns: [{ width: '49%', text: 'Company Address:121,Thirukalimedumainroad,' },
          { width: '2%', text: '' },
          { width: '49%', text: 'Office Address:571,Thirukalimedumainroad,\n' }]
        },
        {
          columns: [
            { width: '20%', text: '' },
            { width: '30%', text: '\t\tKanchipuram-631502.' },
            { width: '20%', text: '' },
            { width: '30%', text: '\tKanchipuram-631502.\n\n' }]
        },
        {
          table: {
            widths: ['100%'],
            body: [
              [{ text: '', colSpan: 1, border: [false, false, false, true] }],
              [{ text: '', colSpan: 1, border: [false, false, false, true] }],
            ]
          }
        },
        {
          text: '\n'
        },
        {
          table: {
            widths: ['25%', '25%', '25%', '25%'],
            body: [
              [{ text: 'R.A.INDUSTRIES', style: 'common', colSpan: 4 }, {}, {}, {}],
              [{ text: 'TAX INVOICE', style: 'common', colSpan: 4 }, {}, {}, {}],
              [{ text: 'INVOICE NO', colSpan: 1 }, { text: `RA/${date}/${data.InvoiceNo}`, colSpan: 1 },
              { text: 'Invoice Date', colSpan: 1 }, { text: `${data.InvoiceDate}`, colSpan: 1 }],
              [{ text: `${address}`, colSpan: 2, rowSpan: 5 }, {}, { text: 'Invoice Backup No', colSpan: 1 }, { text: `${data.InvoiceBackupNo}`, colSpan: 1 }],
              [{}, {}, { text: 'Purchase Order No', colSpan: 1 }, { text: `${data.PurchaseOrderNo}`, colSpan: 1 }],
              [{}, {}, { text: 'Purchase Order Date', colSpan: 1 }, { text: `${data.PurchaseOrderDate}`, colSpan: 1 }],
              [{}, {}, { text: 'Purchase Order Position', colSpan: 1 }, { text: `${data.PurchaseOrderPosition}`, colSpan: 1 }],
              [{}, {}, { text: 'W.O Month Ref', colSpan: 1 }, { text: `${month}`, colSpan: 1 }],
              [{ text: 'PAN NO', colSpan: 1 }, { text: `BOYPM9527F`, colSpan: 1 }, { text: 'Delivery Challan No', colSpan: 1 }, { text: `${data.InvoiceNo}`, colSpan: 1 }],
              [{ text: 'TIN NO', colSpan: 1 }, { text: `33586273975`, colSpan: 1 }, { text: 'Type', colSpan: 1 }, { text: `Manufacturing Services`, colSpan: 1 }],
              [{ text: 'GSTIN', colSpan: 1 }, { text: `33BOYPM957F1ZC`, colSpan: 1 }, { text: 'Buyer GSTIN', colSpan: 1 }, { text: `${buyerGst}`, colSpan: 1 }],
              [{
                table: {
                  widths: ['7%', '15%', '10%', '10%', '10%', '10%', '10%', '8%', '10%', '10%'],
                  body: multiTab
                },
                colSpan: 4
              }, {}, {}, {}],
              // [{text:'Sub Total',colSpan:3},{},{},{text:`${subTotal}/-`,colSpan:1}],
              [{ text: 'IGST', style: 'common', colSpan: 2 }, {}, { text: `${data.IntegratedGoodAndServicesTax}%`, colSpan: 1 }, { text: `${iGst}/-`, colSpan: 1 }],
              [{ text: 'SGST', style: 'common', colSpan: 2 }, {}, { text: `${data.StateGoodsAndServicesTax}%`, colSpan: 1 }, { text: `${sGst}/-`, colSpan: 1 }],
              [{ text: 'CGST', style: 'common', colSpan: 2 }, {}, { text: `${data.CentralGoodsAndServicesTax}%`, colSpan: 1 }, { text: `${cGst}/-`, colSpan: 1 }],
              [{ text: 'TOTAL', style: 'common', colSpan: 2 }, {}, { text: '', colSpan: 1 }, { text: `${allTotal}/-`, colSpan: 1 }],
              [{ text: `Total Invoice Amount: ${sp} rupees only`, colSpan: 4 }, {}, {}, {}],
              [{ text: `  \t RECEIVERS SIGNATURE`, colSpan: 3, border: [true, true, false, false] }, {}, {}, { text: 'For R.A.INDUSTRIES', colSpan: 1, border: [false, true, true, false] }],
              [{ text: '', colSpan: 1, border: [true, false, false, false] }, { text: '', colSpan: 1, border: [false, false, false, false] }, { text: '', colSpan: 1, border: [false, false, false, false] }, { text: ' (A.MANIKANDAN)', colSpan: 1, border: [false, false, true, false] }],
              [{ text: '\n', colSpan: 1, border: [true, false, false, false,] }, { text: '\n', colSpan: 1, border: [false, false, false, false] }, { text: '\n', colSpan: 1, border: [false, false, false, false] }, { text: '\n', colSpan: 1, border: [false, false, true, false] },],
              [{ text: '\n', colSpan: 1, border: [true, false, false, false,] }, { text: '\n', colSpan: 1, border: [false, false, false, false] }, { text: '\n', colSpan: 1, border: [false, false, false, false] }, { text: '\n', colSpan: 1, border: [false, false, true, false] },],
              [{ text: '', colSpan: 1, border: [true, false, false, false] }, { text: '', colSpan: 1, border: [false, false, false, false] }, { text: '', colSpan: 1, border: [false, false, false, false] }, { text: 'AUTHORIZED', colSpan: 1, border: [false, false, true, false] }],
              [{ text: '', colSpan: 1, border: [true, false, false, true] }, { text: '', colSpan: 1, border: [false, false, false, true] }, { text: '', colSpan: 1, border: [false, false, false, true] }, { text: ' SIGNATORY', colSpan: 1, border: [false, false, true, true] }],
            ]
          }
        },
        {
          text: '', pageBreak: 'after'
        },
        {
          text: 'R.A.INDUSTRIES\n', style: 'header', link: 'https://www.raindustries.in'
        },
        {
          text: '(Wooden & Engineering Works)\n\n', style: 'common'
        },
        {
          columns: [{ width: '40%', text: 'EMAIL:\tmanikanchi1992@gmail.com' },
          { width: '20%', text: '' },
          { width: '40%', text: 'MOBILE:\t9940663129,\t9003883939\n\n' }]
        },
        {
          columns: [{ width: '49%', text: 'Company Address:121,Thirukalimedumainroad,' },
          { width: '2%', text: '' },
          { width: '49%', text: 'Office Address:571,Thirukalimedumainroad,\n' }]
        },
        {
          columns: [
            { width: '20%', text: '' },
            { width: '30%', text: '\t\tKanchipuram-631502.' },
            { width: '20%', text: '' },
            { width: '30%', text: '\tKanchipuram-631502.\n\n\n' }]
        },
        {
          table: {
            widths: ['100%'],
            body: [
              [{ text: '', colSpan: 1, border: [false, false, false, true] }],
              [{ text: '', colSpan: 1, border: [false, false, false, true] }],
            ]
          }
        },
        {
          text: '\n'
        },
        {
          text: `DELIVERYCHELLAN- ${data.InvoiceNo}\n`, style: 'common'
        },
        {
          columns: [
            { width: '25%', text: `P.O NO : ${data.PurchaseOrderNo}` },
            { width: '35%', text: '' },
            { width: '30%', text: '' },
            { width: '20%', text: `${data.InvoiceDate}` }]
        },
        {
          text: `INV NO : RA/${date}/${data.InvoiceNo}`
        },
        {
          text: '\n\n'
        },
        {
          text: `Customer Name: ${companyFullName}`
        },
        {
          text: '*\n'
        },
        {
          table: {
            widths: ['50%', '50%'],
            body: [
              [{ text: 'From', colSpan: 1 }, { text: 'To', colSpan: 1 }],
              [{ text: `${ourCompanyAddress}`, colSpan: 1 }, { text: `${address}`, colSpan: 1 }],
            ]
          }
        },
        {
          text: '\n'
        },
        {
          text: 'Dear Sir,\n\n'
        },
        {
          text: `Work Order Number : IT-${tab[0].wo}\n`
        },
        {
          text: '\n'
        },
        {
          table: {
            widths: ['7%', '23%', '10%', '20%', '15%', '10%', '15%'],
            body: multiDc
          }
        },
        {
          text: '\n\n\n'
        },
        {
          table: {
            widths: ['33%', '34%', '33%'],
            body: [
              [{ text: 'Prepared by', colSpan: 1 }, { text: 'Authorized by', colSpan: 1 }, { text: 'Received by customer', colSpan: 1 }],
              [{ text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] },],
              [{ text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] },],
              [{ text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] },],
              [{ text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] },],
              [{ text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] },],
              [{ text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] },],
              [{ text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] },],
              [{ text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] },],
              [{ text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] }, { text: '', colSpan: 1, border: [true, false, true, false] },],
              [{ text: '', colSpan: 1, border: [true, false, true, true] }, { text: '', colSpan: 1, border: [true, false, true, true] }, { text: '', colSpan: 1, border: [true, false, true, true] },],
            ]
          }
        }
      ],
      styles: {
        common: {
          alignment: 'center'
        },
        header: {
          fontSize: 30,
          bold: true,
          alignment: 'center'
        },
        email: {
          alignment: 'right'
        },
        mobile: {
          alignment: 'left'
        },
        companyAdd: {
          alignment: 'left'
        },
        officeAdd: {
          alignment: 'right'
        },
        waterMark: {
          fontSize: 35
        }
      }
    };

    pdfMake.createPdf(docDefinition).open();
  }


  render() {
    const { queryType, numberOfPage, qureyValue, totalCount, pagenation, page } = this.state;
    return (
      <div>
        <div className='container' style={{ marginTop: '20px' }}>
          <div className='row'>
            <div className='col-md-2'>
              <div className='form-group'>
                <label>Select Field</label>
                <select className='form-control' onChange={this.onChangeType} name='queryType' value={queryType}>
                  <option value='Name'>Name</option>
                  <option value='Email'>Email</option>
                  <option value='Phone'>Phone</option>
                </select>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='form-group'>
                <label for='qureyValue'>Field value</label>
                <input className='form-control' onChange={this.onChangeType} type='text' id='qureyValue' name='qureyValue' value={qureyValue} />
              </div>
            </div>
            <div className='col-md-1'>
              <label>Query</label>
              <button onClick={this.GetDynamicquery} className='form-control btn btn-success'>Submit</button>
            </div>
            <div className='col-md-1'>
              <label>Total</label>
              <p className='form-control btn btn-primary'>{totalCount}</p>
            </div>
            <div className='col-md-1'>
              <label>Pages</label>
              <p className='form-control btn btn-primary'>{numberOfPage}</p>
            </div>
            <div className='col-md-1'>
              <label for=''>Add</label>
              <i onClick={() => {
                this.props.history.push({
                  pathname: '/new-invoice',
                  data: null
                })
              }} className='fa fa-plus-circle'></i>
            </div>
          </div>
        </div>
        <div className='container'>
          <ul class="pagination pagination-lg">
            {
              pagenation.map((i, index) => {
                return (
                  <li style={{ cursor: 'pointer' }} className={page === i ? 'active' : ''}><a onClick={() => this.pagenationToDB(i)}>{i}</a></li>
                )
              })
            }
          </ul>
          <hr />
        </div>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-md-12`}>
              <div className={`table-responsive`}>
                <table className={`table table-striped table-hover`}>
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>InvoiceNo</th>
                      <th>InvoiceDate</th>
                      <th>P.O.D</th>
                      <th>PDF</th>
                      <th>Action</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.data.map((x, i) => {
                        return (
                          <tr key={i}>
                            <td>{this.state.resultPerPage > 0 ? i + 1 + this.state.resultPerPage : i + 1}</td>
                            <td>{x.InvoiceNo}</td>
                            <td>{x.InvoiceDate}</td>
                            <td>{x.PurchaseOrderNo}</td>
                            <td onClick={() => this.pdfGenerater(x)}><i className={`fa fa-file-pdf-o`}></i></td>
                            {/* <td>{reverseDate(x.CreateAt)}<sup style={{ fontSize: '8px', marginLeft: '3px' }} className='badge'>{utcToInc(x.CreateAt)}</sup></td> */}
                            <td onClick={() => this.onEditInvoice(x, i)}><i className={`fa fa-edit text-primary`}></i></td>
                            <td onClick={() => this.deleteOnShortterms(x, i)}><i className={`fa fa-trash  text-danger`}></i></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
