import axios from 'axios';
import React, { Component } from 'react'
import Url from '../config/url';

export default class NewInvoice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: props.location.data != null ? props.location.data._id : null,
            InvoiceNo: props.location.data != null ? props.location.data.InvoiceNo : null,
            CompanyAddress: props.location.data != null ? props.location.data.CompanyAddress : "INDO-TECH",
            InvoiceDate: props.location.data != null ? props.location.data.InvoiceDate : null,
            InvoiceBackupNo: props.location.data != null ? props.location.data.InvoiceBackupNo : null,
            PurchaseOrderNo: props.location.data != null ? props.location.data.PurchaseOrderNo : null,
            PurchaseOrderDate: props.location.data != null ? props.location.data.PurchaseOrderDate : null,
            PurchaseOrderPosition: props.location.data != null ? props.location.data.PurchaseOrderPosition : null,
            IntegratedGoodAndServicesTax: props.location.data != null ? props.location.data.IntegratedGoodAndServicesTax : null,
            StateGoodsAndServicesTax: props.location.data != null ? props.location.data.StateGoodsAndServicesTax : null,
            CentralGoodsAndServicesTax: props.location.data != null ? props.location.data.CentralGoodsAndServicesTax : null,
            TotalWithGST: props.location.data != null ? props.location.data.TotalWithGST != undefined : null,
            Discription: props.location.data != null ? props.location.data.Discription != undefined : null,
            MaterialsTables: props.location.data != null ? props.location.data.MaterialsTables : [{
                "Materials": "",
                "wt": null,
                "wo": null,
                "size": null,
                "qty": null,
                "perCost": null,
                "dc": "",
                "drgNo": "",
                "sac": null,
                "cost": null
            }]
        }
    }

    onChangeEvent = (event) => this.setState({ [event.target.name]: event.target.value })

    addMaterialTable = () => {
        this.setState({
            MaterialsTables: this.state.MaterialsTables.concat({
                "Materials": "",
                "wt": null,
                "wo": null,
                "size": null,
                "qty": null,
                "perCost": null,
                "dc": "",
                "drgNo": "",
                "sac": null,
                "cost": null
            })
        })
    }
    

    deleteMaterialTable = (index) => {
        this.state.MaterialsTables.splice(index, 1)
        this.setState({ MaterialsTables: this.state.MaterialsTables });
    }

    submitInvoiceData = () => {
        let headers = { role: localStorage.getItem('role') };
        axios.post(`${Url}/invoice/new`, this.state, { headers })
            .then(rel => { if (rel.data.success) this.navigateToInvoiceRouter(); })
            .catch(err => {
                console.log('====================================');
                console.log(err);
                console.log('====================================');
            })
    }

    updateInvoiceData = () => {
        let headers = { role: localStorage.getItem('role') };
        axios.put(`${Url}/invoice/update/${this.state.InvoiceNo}`, this.state, { headers })
            .then(rel => { if (rel.data.success) this.navigateToInvoiceRouter(); })
            .catch(err => {
                console.log('====================================');
                console.log(err);
                console.log('====================================');
            })
    }

    onChangeTable = (id, event) => {
        let MaterialsTables = this.state.MaterialsTables;
        MaterialsTables[id][event.target.name] = event.target.value;
        this.setState({ MaterialsTables })
    }

    navigateToInvoiceRouter = () => {
        this.props.history.push('/invoice');
    }

    render() {
        const { CompanyAddress, InvoiceDate, InvoiceBackupNo, PurchaseOrderNo, PurchaseOrderDate, PurchaseOrderPosition,
            IntegratedGoodAndServicesTax, StateGoodsAndServicesTax, CentralGoodsAndServicesTax, Discription, InvoiceNo
        } = this.state;
        return (
            <div className='container' style={{ marginTop: '20px' }}>
                <div className='row' style={{ margin: '20px 0px 10px 0px' }}>
                    <div className='col-md-1'>InvoiceNo:</div>
                    <div className='col-md-2'>Company Name:</div>
                    <div className='col-md-2'>Invoice Date:</div>
                    <div className='col-md-2'>Invoice Backup No:</div>
                    <div className='col-md-2'>Purchase Order No:</div>
                    <div className='col-md-2'>Purchase Order Date:</div>
                    <div className='col-md-1'>POP:</div>
                </div>
                <div className='row' style={{ margin: '5px 0px 10px 0px' }}>
                    <div className='col-md-1'><input className='form-control' value={InvoiceNo != null ? InvoiceNo : null} disabled /></div>
                    <div className='col-md-2'>
                        <select className='form-control' onChange={this.onChangeEvent} name='CompanyAddress' value={CompanyAddress}>
                            <option value='INDO-TECH'>INDO-TECH</option>
                        </select>
                    </div>
                    <div className='col-md-2'><input onChange={this.onChangeEvent} name='InvoiceDate' value={InvoiceDate} className='form-control' type={'date'} /></div>
                    <div className='col-md-2'><input onChange={this.onChangeEvent} name='InvoiceBackupNo' value={InvoiceBackupNo} className='form-control' type={'text'} /></div>
                    <div className='col-md-2'><input onChange={this.onChangeEvent} name='PurchaseOrderNo' value={PurchaseOrderNo} className='form-control' type={'text'} /></div>
                    <div className='col-md-2'><input onChange={this.onChangeEvent} name='PurchaseOrderDate' value={PurchaseOrderDate} className='form-control' type={'date'} /></div>
                    <div className='col-md-1'><input onChange={this.onChangeEvent} name='PurchaseOrderPosition' value={PurchaseOrderPosition} className='form-control' type={'text'} /></div>
                </div>
                <div className='row' style={{ margin: '20px 0px 10px 0px', backgroundColor: 'red', color: 'white', fontSize: '16px' }}>
                    <div className='col-md-1'>S.No</div>
                    <div className='col-md-1'>MATERIALS</div>
                    <div className='col-md-1'>WT</div>
                    <div className='col-md-1'>WO NO</div>
                    <div className='col-md-1'>SIZE</div>
                    <div className='col-md-1'>QTY</div>
                    <div className='col-md-1'>preCost</div>
                    <div className='col-md-1'>DC NO</div>
                    <div className='col-md-1'>SAC</div>
                    <div className='col-md-1'>DRG NO</div>
                    <div className='col-md-1'>COST</div>
                    <div className='col-md-1'><i onClick={this.addMaterialTable} className='fa fa-plus-circle'></i></div>
                </div>
                {
                    this.state.MaterialsTables.map((x, i) => {
                        return (
                            <div key={i} className='row' style={{ margin: '10px 0px 10px 0px' }}>
                                <div className='col-md-1'><input className='form-control' type={'text'} value={i + 1} /></div>
                                <div className='col-md-1'><input className='form-control' onChange={(e) => this.onChangeTable(i, e)} type={'text'} name='Materials' value={x.Materials} /></div>
                                <div className='col-md-1'><input className='form-control' onChange={(e) => this.onChangeTable(i, e)} type={'text'} name='wt' value={x.wt} /></div>
                                <div className='col-md-1'><input className='form-control' onChange={(e) => this.onChangeTable(i, e)} type={'text'} name='wo' value={x.wo} /></div>
                                <div className='col-md-1'><input className='form-control' onChange={(e) => this.onChangeTable(i, e)} type={'text'} name='size' value={x.size} /></div>
                                <div className='col-md-1'><input className='form-control' onChange={(e) => this.onChangeTable(i, e)} type={'text'} name='qty' value={x.qty} /></div>
                                <div className='col-md-1'><input className='form-control' onChange={(e) => this.onChangeTable(i, e)} type={'text'} name='perCost' value={x.perCost} /></div>
                                <div className='col-md-1'><input className='form-control' onChange={(e) => this.onChangeTable(i, e)} type={'text'} name='dc' value={x.dc} /></div>
                                <div className='col-md-1'><input className='form-control' onChange={(e) => this.onChangeTable(i, e)} type={'text'} name='drgNo' value={x.drgNo} /></div>
                                <div className='col-md-1'><input className='form-control' onChange={(e) => this.onChangeTable(i, e)} type={'text'} name='sac' value={x.sac} /></div>
                                <div className='col-md-1'><input className='form-control' onChange={(e) => this.onChangeTable(i, e)} type={'text'} name='cost' value={x.cost} /></div>
                                <div className='col-md-1'><i onClick={() => this.deleteMaterialTable(i)} className='fa fa-trash text-danger'></i></div>
                            </div>
                        )
                    })
                }
                <div className='row' style={{ margin: '30px 0px 10px 0px' }}>
                    <div className='col-md-2'>IGST:</div>
                    <div className='col-md-2'>CGST:</div>
                    <div className='col-md-2'>SGST:</div>
                    <div className='col-md-6'>Discription</div>
                </div>
                <div className='row' style={{ margin: '10px 0px 10px 0px' }}>
                    <div className='col-md-2'><input onChange={this.onChangeEvent} name='IntegratedGoodAndServicesTax' value={IntegratedGoodAndServicesTax} className='form-control' type={'text'} /></div>
                    <div className='col-md-2'><input onChange={this.onChangeEvent} name='StateGoodsAndServicesTax' value={StateGoodsAndServicesTax} className='form-control' type={'text'} /></div>
                    <div className='col-md-2'><input onChange={this.onChangeEvent} name='CentralGoodsAndServicesTax' value={CentralGoodsAndServicesTax} className='form-control' type={'text'} /></div>
                    <div className='col-md-6'><textarea onChange={this.onChangeEvent} name='Discription' value={Discription} className='form-control' type={'text'} ></textarea></div>
                </div>
                <br />
                {
                    InvoiceNo ? <button onClick={this.updateInvoiceData} className='btn btn-primary btn-block'>Update</button> :
                        <button onClick={this.submitInvoiceData} className='btn btn-success btn-block'>Sumit</button>
                }<br />
                <button onClick={this.navigateToInvoiceRouter} className='btn btn-danger btn-block'>Cancel</button>
            </div>
        )
    }
}