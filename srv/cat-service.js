const cds = require('@sap/cds',);
module.exports = cds.service.impl(async function () {

    let { assignment_criteria_help, condition_help, currency_help, member_help, main } = this.entities;
    const c4re = await cds.connect.to('iflow');
    var first_assignment_criteria_help = true;

    this.before('READ', assignment_criteria_help, async (req) => {
        try {
            if (first_assignment_criteria_help) {
                // let pageno = 1;
                const entries = [];
                // while (true) {
                const resp = await c4re.get(`/dev/dropdown?drop_key=assignment_criteria`);
                cds.tx(req).run(DELETE(assignment_criteria_help));
                // const spaces = resp.content;
                const spaces = resp.body;
                // if (spaces.length == 0) {
                //     break;
                // }
                spaces.forEach(space => {
                    entries.push({
                        value2: `${space.value2}`
                    });
                });
                // pageno++;
                // }
                await cds.tx(req).run(INSERT.into(assignment_criteria_help).entries(entries));
                // return spaces;
                first_assignment_criteria_help = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });
    var firt_condition_help = true;
    this.before('READ', condition_help, async (req) => {
        try {
            if (firt_condition_help) {
                // let pageno = 1;
                const entries = [];
                // while (true) {
                // const resp = await c4re.get(`/dev/dropdown?drop_key=assignment_criteria`);
                cds.tx(req).run(DELETE(condition_help));
                // const spaces = resp.content;
                // const spaces = resp.body;
                //  const spaces = {equal,};

                // if (spaces.length == 0) {
                //     break;
                // }
                // spaces.forEach(space => {
                entries.push({
                    value: 'Document Type',
                    value2: 'Invoice'
                });
                entries.push({
                    value: 'Document Type',
                    value2: 'Debit Memo'
                });
                entries.push({
                    value: 'Document Type',
                    value2: 'Credit Memo'
                });
                entries.push({
                    value: 'Invoice Value',
                    value2: 'Equal To'
                });
                entries.push({
                    value: 'Invoice Value',
                    value2: 'In Between'
                });
                entries.push({
                    value: 'Invoice Value',
                    value2: 'Less Than'
                });
                entries.push({
                    value: 'Invoice Value',
                    value2: 'More Than'
                });
                entries.push({
                    value: 'Invoice type',
                    value2: 'Asset'
                });
                entries.push({
                    value: 'Invoice type',
                    value2: 'Material'
                });
                entries.push({
                    value: 'Invoice type',
                    value2: 'Service'
                });
                entries.push({
                    value: 'Jurisdiction Code',
                    value2: '330612010--DEMO1'
                });
                entries.push({
                    value: 'Jurisdiction Code',
                    value2: 'CA0017000--Californnia'
                });
                entries.push({
                    value: 'Jurisdiction Code',
                    value2: 'NY0000000--NewYork'
                });
                entries.push({
                    value: 'Supplier Type',
                    value2: 'Export'
                });
                entries.push({
                    value: 'Supplier Type',
                    value2: 'Domestic'
                });


                // });
                // pageno++;
                // }
                await cds.tx(req).run(INSERT.into(condition_help).entries(entries));
                // return spaces;
                firt_condition_help = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    var first_currency_help = true;
    this.before('READ', currency_help, async (req) => {
        try {
            if (first_currency_help) {
                // let pageno = 1;
                const entries = [];
                // while (true) {
                const resp = await c4re.get(`/dev/search-help?master_id=12`);
                cds.tx(req).run(DELETE(currency_help));
                // const spaces = resp.content;
                const spaces = resp.body.search_help;
                // if (spaces.length == 0) {
                //     break;
                // }
                spaces.forEach(space => {
                    entries.push({
                        description: `${space.description}`,
                        code: `${space.code}`
                    });
                });
                // pageno++;
                // }
                await cds.tx(req).run(INSERT.into(currency_help).entries(entries));
                // return spaces;
                first_currency_help = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    var first_member_help = true;
    this.before('READ', member_help, async (req) => {
        try {
            if (first_member_help) {
                // let pageno = 1;
                const entries = [];
                // while (true) {
                const resp = await c4re.get(`/dev/assignment-approver?search_string=&assign_details=X`);
                cds.tx(req).run(DELETE(member_help));
                // const spaces = resp.content;
                const spaces = resp.body;
                // if (spaces.length == 0) {
                //     break;
                // }
                spaces.forEach(space => {
                    entries.push({

                        name: `${space.name}`,
                        id1: `${space.id}`,
                        is_group: `${space.is_group}`,
                        position: `${space.position}`
                    });
                });
                // pageno++;
                // }
                await cds.tx(req).run(INSERT.into(member_help).entries(entries));
                // return spaces;
                first_member_help = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    this.on('POST', main, async (req) => {
        // const var1 = await SELECT.from(member_help).where({ id1: '3' });
        // const var3 = req.data.rel12[0].member_name;
        // const var2 = await SELECT.from(member_help).where({ name: req.data.rel12[0].member_name });
        const arr1 = [];
        const arr2 = [];
        for (i = 0; i < req.data.rel12.length; i++) {
            const val = await SELECT.from(member_help).where({ name: req.data.rel12[i].member_name });
            arr1.push({
                approver: parseInt(val[0].id1),
                isgroup: val[0].is_group,
                level: `${""}`,
            });
            // req.data.rel12[i].member_name,
        }
        for (i = 0; i < req.data.rell1.length; i++) {

            let operatorSymbol;

            if (req.data.rell1[i].condition === 'Equal To') {
                operatorSymbol = '=';
            } else if (req.data.rell1[i].condition === 'Less Than') {
                operatorSymbol = '<';
            } else if (req.data.rell1[i].condition === 'Less Than') {
                operatorSymbol = '>';
            }
            else if (req.data.rell1[i].condition === 'In Between') {
                operatorSymbol = 'between';
            }
            else {
                operatorSymbol = '='; // Defaulting to '=' for other cases
            }


            let type;
            if (req.data.rell1[i].assignment_criteria == 'Invoice Value') {
                type = 'number';
            } else {
                type = 'string';
            }


            let value1;
            if (req.data.rell1[i].assignment_criteria == 'Invoice Value' && req.data.rell1[i].amount != null) {
                value = 1;
                arr2.push({
                    decider: req.data.rell1[i].assignment_criteria,
                    operator: `=`,
                    type: `${type}`,
                    value1: `${req.data.rell1[i].condition}`,
                    value2: `${""}`,
                });
                arr2.push({
                    decider: 'currency',
                    operator: `=`,
                    type: `string`,
                    value1: `${req.data.rell1[i].currency}`,
                    value2: `${""}`,
                });
            }
            else if (req.data.rell1[i].assignment_criteria == 'Invoice Value' && req.data.rell1[i].condition == 'In Between') {
                arr2.push({
                    decider: req.data.rell1[i].assignment_criteria,
                    operator: 'between',
                    type: `${type}`,
                    value1: `${req.data.rell1[i].amount_from}`,
                    value2: `${req.data.rell1[i].amount_to}`,
                });
                arr2.push({
                    decider: 'currency',
                    operator: `=`,
                    type: `string`,
                    value1: `${req.data.rell1[i].currency}`,
                    value2: `${""}`,
                });
            }

            else {
                arr2.push({
                    decider: req.data.rell1[i].assignment_criteria,
                    operator: `${operatorSymbol}`,
                    type: `${type}`,
                    value1: `${req.data.rell1[i].condition}`,
                    value2: `${""}`,
                })

            }


        }




        // var mem_list = [];
        // mem_list = req.data.members;
        // var m_id=[];
        // mem_list.forEach(mem =>{
        //   m_id.push(mem.member_id);
        // })

        var body = {
              approver:arr1,
              criteria:arr2
        }
        //   try {
        //     debugger
        //     resp = await c4re.post('/group', body); 
        //     const createEntity = await INSERT.into(Groups).entries(req.data);
        //     if(statuscode = 200){
        //       const g_id = req.data.group_id;
        // //     const membersPromises = mem_list.map(async (memberData) => {
        // //       cds.tx(req).run(DELETE(Members).where({ member_id : memberData.member_id }));
        // //       const newMember = {
        // //           ...memberData,
        // //           group_id: g_id, // Set the group_id for the member
        // //       };
        // //       await INSERT.into(Members).entries(newMember);
        // //   });
        // //   await Promise.all(membersPromises);

        //     return req.data;
        //     }else{
        //       req.error({
        //         message: 'Internal error while creating "Group"',
        //         code: 'GROUP_NOT_CREATED'
        //       })
        //     }
        //   } catch (err) {
        //       req.error(500, err.message);
        //   }
    });


});