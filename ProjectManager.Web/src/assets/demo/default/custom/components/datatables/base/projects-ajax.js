﻿var DatatableRemoteAjaxDemo = { init: function () { var t; (t = $(".m_datatable").mDatatable({ data: { type: "remote", source: { read: { method: "GET", url: "/api/Projects", map: function (t) { var e = t; return void 0 !== t.data && (e = t.data), e } } }, pageSize: 10, serverPaging: !0, serverFiltering: !0, serverSorting: !0 }, layout: { scroll: !1, footer: !1 }, sortable: !0, pagination: !0, toolbar: { items: { pagination: { pageSizeSelect: [10, 20, 30, 50, 100] } } }, search: { input: $("#generalSearch") }, columns: [{ field: "name", title: "Proje Adı", sortable: !1, width: 40, selector: !1 }, { field: "technologies", title: "Teknolojiler", filterable: !1, width: 150 }, { field: "startDate", title: "Başlangıç Tarihi", width: 150, type: "date", format: "DD/MM/YYYY" }, { field: "endDate", title: "Bitiş Tarihi", type: "date", format: "DD/MM/YYYY" }, { field: "totalTaskCount", title: "Toplam Görev Sayısı", type: "number" }, { field: "totalTimeSpent", title: "Toplam Zaman Harcaması", type: "number" }, { field: "status", title: "Durum", template: function (t) { var e = { 1: { title: "Başlanmadı", class: "m-badge--brand" }, 2: { title: "Devam Ediyor", class: " m-badge--metal" }, 3: { title: "İptal Edildi", class: " m-badge--primary" }, 4: { title: "Tamamlandı", class: " m-badge--success" }, 5: { title: "Ertelendi", class: " m-badge--info" } }; return '<span class="m-badge ' + e[t.status].class + ' m-badge--wide">' + e[t.status].title + "</span>" } }, { field: "Actions", width: 110, title: "Eylemler", sortable: !1, overflow: "visible", template: function (t, e, a) { return '\t\t\t\t\t\t<div class="dropdown ' + (a.getPageSize() - e <= 4 ? "dropup" : "") + '">\t\t\t\t\t\t\t<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"></i>                            </a>\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t    \t<a class="dropdown-item" href="/proje-formu"><i class="la la-edit"></i> Düzenle</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-trash"></i> Sil</a>\t\t\t\t\t\t  \t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a href="/proje-formu" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Düzenle">\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Sil">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t' } }] })).getDataSourceQuery();}};jQuery(document).ready(function(){DatatableRemoteAjaxDemo.init()});