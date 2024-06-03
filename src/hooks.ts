import type { Reroute } from "@sveltejs/kit";

export const reroute: Reroute = ({ url }) => {
        const { pathname } = url;

        let route = pathname;

        route = route.replace('/store/collections/', '/');

        return route;
}
