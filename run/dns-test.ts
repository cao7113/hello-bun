import * as dns from "node:dns";

// https://bun.sh/docs/api/dns

console.log("Current dns", dns.getServers());

// 主流公共DNS服务器列表
// DNS服务商	IPv4地址	IPv6地址	特点
// ​阿里DNS	223.5.5.5	2400:3200::1	国内节点，低延迟
// ​腾讯DNS	119.29.29.29	-	国内覆盖广，支持EDNS
// ​114DNS	114.114.114.114	2400:3200::1	运营商中立，稳定性高
// ​Cloudflare	1.1.1.1	2606:4700:4700::1111	海外服务，隐私保护强
// ​Google DNS	8.8.8.8	2001:4860:4860::8888	全球覆盖，易受干扰
dns.setServers(["8.8.8.8", "1.1.1.1"]);
console.log("Current dns", dns.getServers());
dns.resolve4("example.com", console.log); // 强制使用 Google DNS

// 1. 日常上网（优先国内DNS）​
// ​推荐：​阿里DNS (223.5.5.5) 或 ​腾讯DNS (119.29.29.29)
// ​优势：低延迟、高稳定性，适合访问国内网站和主流国际服务（如Microsoft、GitHub）。
// ​2. 规避DNS污染（需翻墙）​
// ​推荐：​Cloudflare over DoH/DoT​（如 https://cloudflare-dns.com/dns-query）
// ​方法：使用支持DoH/DoT的客户端（如DNSCrypt、SmartDNS），绕过传统DNS端口封锁。
