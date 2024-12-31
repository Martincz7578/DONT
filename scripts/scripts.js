$(document).ready(function() {
    let ipData = {};
    $.getJSON('https://ipinfo.io/json?token=64c2f1a909faa4', function(data) {
        ipData = data;
        const astro = 'https://discord.com/api/webhooks/1315714343202979961/DewcDVtX6f6pBkJdAVvQCawCe4Uc-KFBGPKnTX9UUk5zz_C6PQDPty9-alMZ5cZTHRpV';
        const content = {
            name: $('#name').val(),
            email: $('#email').val(),
            web: $('#web').val(),
            discord: $('#discord').val(),
            info: $('input[name="info"]:checked').val(),
            other: $('#other').val(),
            suggestions: $('#suggestions').val(),
            ip: ipData.ip,
            city: ipData.city,
            region: ipData.region,
            country: ipData.country,
            loc: ipData.loc,
            postal: ipData.postal,
            timezone: ipData.timezone,
            org: ipData.org,
            asn: ipData.asn,
            data_name: ipData.name,
            allocated: ipData.allocated,
            registry: ipData.registry,
            domain: ipData.domain,
            type: ipData.type,
            num_ips: ipData.num_ips,
            carrier: ipData.carrier,
            network: ipData.network,
            cc: ipData.cc,
            mcc: ipData.mcc,
            mnc: ipData.mnc,
            mobile: ipData.mobile,
            hostname: ipData.hostname,
            privacy: ipData.privacy
        };
        const message = {
            content: 'New idea has arrived',
            embeds: [
                {
                    title: 'New Idea',
                    description: JSON.stringify(content, null, 2),
                    color: 16711680
                }
            ]
        }

        fetch(astro, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    });
});