/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";
import { useService } from "@web/core/utils/hooks";
import { useRef, useSubEnv } from "@odoo/owl";
import { Domain } from "@web/core/domain";


class AwesomeDashboard extends Component {

    setup() {
        useSubEnv({
            config: {
                ...getDefaultConfig(),
                ...this.env.config,
            },
        });
        this.display = {
            controlPanel: { "top-right": false, "bottom-right": false },
        };
        this.action = useService("action");
    }

    openCustomer() {
        this.action.doAction("base.action_partner_form");
    }

    openOrder(title, domain) {
        this.action.doAction({
            type: 'ir.actions.act_window',
            name: this.env._t('orders'),
            res_model: 'awesome_tshirt.order',
            views: [[false, 'form'],
            [false, 'tree']],
            domain: new Domain(domain).toList(),
            search_view_id: [false],
        });
    }

    newOrders() {
        const Domain="[('create_date', '>=', (context_today() - datetime.timedelta(days = 7)).strftime('%Y-%m-%d'))]"
        this.openOrder("orders created in the last 7 days",Domain);
    }

    CancelledOrder() {
        const Domain="[('create_date', '>=', (context_today() - datetime.timedelta(days = 7)).strftime('%Y-%m-%d')),('state' ,'==','cancelled')]"
        this.openOrder("orders created in the last 7 days",Domain);


    }
}
AwesomeDashboard.components = { Layout };
AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
