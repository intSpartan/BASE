"use client"

// import React from 'react'

// const CompareJobs = () => {
//     return (
//         <div>
//             <div class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-4 md:-mx-6 text-sm" x-data="{ isAnnual: true }">


//                 <section class="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
//                     <div class="relative bg-white dark:bg-slate-900 px-6 flex flex-col justify-end">
//                         <div class="pb-5 md:border-b border-slate-200 dark:border-slate-700">
//                             <div class="max-md:text-center">
//                                 <div class="inline-flex items-center whitespace-nowrap">
//                                     <div class="text-sm text-slate-500 mr-2 md:max-lg:sr-only">Monthly</div>
//                                     <div class="relative">
//                                         <input type="checkbox" id="toggle" class="peer sr-only" x-model="isAnnual" />
//                                         <label for="toggle" class="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-indigo-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-indigo-500">
//                                             <span class="sr-only">Pay Yearly</span>
//                                         </label>
//                                     </div>
//                                     <div class="text-sm text-slate-500 ml-2">Yearly <span class="text-emerald-500">(-20%)</span></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-1" aria-hidden="true">
//                         <div class="py-2 text-slate-900 font-medium mt-4">Platform</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-2" aria-hidden="true">
//                         <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Account Access</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-3" aria-hidden="true">
//                         <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Custom Domains</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-4" aria-hidden="true">
//                         <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Receipts Forward</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-5" aria-hidden="true">
//                         <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Supplier Management</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-6" aria-hidden="true">
//                         <div class="py-2 text-slate-900 font-medium mt-4">Features</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-7" aria-hidden="true">
//                         <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Generate Public URLs</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-8" aria-hidden="true">
//                         <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">API Integrations</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-9" aria-hidden="true">
//                         <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Extra Add-ons</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-10" aria-hidden="true">
//                         <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Admin Roles</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-11" aria-hidden="true">
//                         <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Admin Roles</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-12" aria-hidden="true">
//                         <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Enterprise Add-ons</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-[13]" aria-hidden="true">
//                         <div class="py-2 text-slate-900 font-medium mt-4">Support</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-[14]" aria-hidden="true">
//                         <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Custom Connection</div>
//                     </div>
//                 </section>

//                 <section class="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
//                     <div class="relative bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end">
//                         <div class="grow mb-5">
//                             <div class="font-semibold text-slate-900 dark:text-slate-200 mb-0.5">Essential</div>
//                             <div class="mb-1">
//                                 <span class="text-xl font-medium text-slate-900 dark:text-slate-200">$</span><span class="text-3xl font-bold text-slate-900 dark:text-slate-200" x-text="isAnnual ? '29' : '35'">29</span><span class="text-slate-500 font-medium">/mo</span>
//                             </div>
//                             <div class="text-sm text-slate-500">Unlimited placeholder texts.</div>
//                         </div>
//                         <div class="pb-4 border-b border-slate-200 dark:border-slate-700">
//                             <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group" href="#0">
//                                 Get Started <span class="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
//                             </a>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-1">
//                         <div class="py-2 text-slate-900 font-medium mt-4 md:sr-only">Platform</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-2">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span>400 <span class="md:sr-only">Account Access</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-3">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span>4 <span class="md:sr-only">Custom Domains</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-4">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span>Unlimited <span class="md:sr-only">Receipts Forward</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-5">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span>1 <span class="md:sr-only">Supplier Management</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-6">
//                         <div class="py-2 text-slate-900 font-medium mt-4 md:sr-only">Features</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-7">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span><span class="md:sr-only">Generate Public URLs</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-8">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span><span class="md:sr-only">API Integrations</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-9">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span><span class="md:sr-only">Extra Add-ons</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-10">
//                         <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
//                             <span><span class="md:sr-only">Admin Roles</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-11">
//                         <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
//                             <span><span class="md:sr-only">Admin Roles</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-12">
//                         <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
//                             <span><span class="md:sr-only">Enterprise Add-ons</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-[13]">
//                         <div class="py-2 text-slate-900 font-medium mt-4 sr-only">Support</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-[14]">
//                         <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
//                             <span><span class="md:sr-only">Custom Connection</span></span>
//                         </div>
//                     </div>
//                 </section>

//                 <section class="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl dark">
//                     <div class="relative bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end">
//                         <div class="absolute top-0 right-0 mr-6 -mt-4">
//                             <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
//                         </div>
//                         <div class="grow mb-5">
//                             <div class="font-semibold text-slate-900 dark:text-slate-200 mb-0.5">Perform</div>
//                             <div class="mb-1">
//                                 <span class="text-xl font-medium text-slate-900 dark:text-slate-200">$</span><span class="text-3xl font-bold text-slate-900 dark:text-slate-200" x-text="isAnnual ? '49' : '54'">49</span><span class="text-slate-500 font-medium">/mo</span>
//                             </div>
//                             <div class="text-sm text-slate-500">Unlimited placeholder texts.</div>
//                         </div>
//                         <div class="pb-4 border-b border-slate-200 dark:border-slate-700">
//                             <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group" href="#0">
//                                 Get Started <span class="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
//                             </a>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-1">
//                         <div class="py-2 text-slate-900 font-medium mt-4 md:sr-only">Platform</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-2">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span>800 <span class="md:sr-only">Account Access</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-3">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span>10 <span class="md:sr-only">Custom Domains</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-4">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span>Unlimited <span class="md:sr-only">Receipts Forward</span></span>
//                         </div>
//                     </div>
//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-5">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span>10 <span class="md:sr-only">Supplier Management</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-6">
//                         <div class="py-2 text-slate-900 font-medium mt-4 md:sr-only">Features</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-7">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span><span class="md:sr-only">Generate Public URLs</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-8">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span><span class="md:sr-only">API Integrations</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-9">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span><span class="md:sr-only">Extra Add-ons</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-10">
//                         <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
//                             <span><span class="md:sr-only">Admin Roles</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-11">
//                         <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
//                             <span><span class="md:sr-only">Admin Roles</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-12">
//                         <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
//                             <span><span class="md:sr-only">Enterprise Add-ons</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[13]">
//                         <div class="py-2 text-slate-900 font-medium mt-4 sr-only">Support</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[14]">
//                         <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
//                             <span><span class="md:sr-only">Custom Connection</span></span>
//                         </div>
//                     </div>
//                 </section>

//                 <section class="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
//                     <div class="relative bg-white dark:bg-slate-900 px-6 flex flex-col justify-end">
//                         <div class="grow mb-5">
//                             <div class="font-semibold text-slate-900 dark:text-slate-200 mb-0.5">Enterprise</div>
//                             <div class="mb-1">
//                                 <span class="text-xl font-medium text-slate-900 dark:text-slate-200">$</span><span class="text-3xl font-bold text-slate-900 dark:text-slate-200" x-text="isAnnual ? '79' : '85'">79</span><span class="text-slate-500 font-medium">/mo</span>
//                             </div>
//                             <div class="text-sm text-slate-500">Unlimited placeholder texts.</div>
//                         </div>
//                         <div class="pb-4 border-b border-slate-200 dark:border-slate-700">
//                             <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group" href="#0">
//                                 Get Started <span class="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
//                             </a>
//                         </div>
//                     </div>
//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-1">
//                         <div class="py-2 text-slate-900 font-medium mt-4 md:sr-only">Platform</div>
//                     </div>
//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-2">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span>Unlimited <span class="md:sr-only">Account Access</span></span>
//                         </div>
//                     </div>
//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-3">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span>Unlimited <span class="md:sr-only">Custom Domains</span></span>
//                         </div>
//                     </div>
//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-4">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span>Unlimited <span class="md:sr-only">Receipts Forward</span></span>
//                         </div>
//                     </div>
//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-5">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span>Unlimited <span class="md:sr-only">Supplier Management</span></span>
//                         </div>
//                     </div>
//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-6">
//                         <div class="py-2 text-slate-900 font-medium mt-4 md:sr-only">Features</div>
//                     </div>
//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-7">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span><span class="md:sr-only">Generate Public URLs</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-8">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span><span class="md:sr-only">API Integrations</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-9">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span><span class="md:sr-only">Extra Add-ons</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-10">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span><span class="md:sr-only">Admin Roles</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-11">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span><span class="md:sr-only">Admin Roles</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-12">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span><span class="md:sr-only">Enterprise Add-ons</span></span>
//                         </div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[13]">
//                         <div class="py-2 text-slate-900 font-medium mt-4 sr-only">Support</div>
//                     </div>

//                     <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[14]">
//                         <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
//                             <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
//                                 <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
//                             </svg>
//                             <span><span class="md:sr-only">Custom Connection</span></span>
//                         </div>
//                     </div>
//                 </section>


//             </div>
//         </div>
//     )
// }

// export default CompareJobs


import { useState } from "react";
const pricingData = [
    {
        mainTitle: "",
        price: "",
        infoNote: "",
        "Basic Feature": "Basic Feature",
        Users: "Users",
        "Individual data": "Individual data",
        Support: "Support",
        Analytics: "Analytics",
        "Export Reports": "Export Reports",
        titleRow1: "Overview",
        titleRow5: "Reporting And Analytics",
        "Api Access": "Api Access",
    },
    {
        mainTitle: "Basic",
        popular: true,
        price: {
            month: "$3",
            year: "$30",
        },
        infoNote: "Basic features for up to 10 employees with everything you need.",
        "Basic Feature": true,
        Users: 10,
        "Individual data": "20GB",
        Support: true,
        Analytics: "Basic",
        "Export Reports": true,
        "Api Access": false,
    },
    {
        mainTitle: "Business",
        price: {
            month: "$5",
            year: "$60",
        },
        infoNote:
            "Advanced features and reporting better workflows and automation.",
        "Basic Feature": true,
        Users: 20,
        "Individual data": "40GB",
        Support: true,
        Analytics: "Advanced",
        "Export Reports": true,
        "Api Access": true,
    },
    {
        mainTitle: "Enterprise",
        price: {
            month: "$4",
            year: "$40",
        },
        infoNote: "Personalised service and enterprise security for large teams.",
        "Basic Feature": true,
        Users: "Unlimited",
        "Individual data": "Unlimited",
        Support: true,
        Analytics: "Advanced",
        "Export Reports": true,
        "Api Access": true,
    },
];
const LineIcon = ({ bgcolor }) => {
    return (
        <svg
            className="w-5 h-5 mt-1 fill-current"
            width="12"
            height="1"
            viewBox="0 0 12 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0.5C0 0.367392 0.0526785 0.240215 0.146447 0.146447C0.240215 0.0526785 0.367392 0 0.5 0H11.5C11.6326 0 11.7598 0.0526785 11.8536 0.146447C11.9473 0.240215 12 0.367392 12 0.5C12 0.632608 11.9473 0.759786 11.8536 0.853554C11.7598 0.947322 11.6326 1 11.5 1H0.5C0.367392 1 0.240215 0.947322 0.146447 0.853554C0.0526785 0.759786 0 0.632608 0 0.5Z"
                fill={bgcolor}
            />
        </svg>
    );
};
const RightIcon = ({ bgcolor }) => {
    return (
        <svg
            className="w-5 h-5 mt-1"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.8267 26.817L24.3485 36.3763L42.6482 18.1795"
                stroke={bgcolor}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="28" cy="28" r="26" stroke={bgcolor} strokeWidth="4" />
        </svg>
    );
};
const Sample5 = () => {
    const [monthprice, setMonthPrice] = useState(true);
    return (
        <div className="bg-gray-300 min-h-[100vh] flex items-center justify-center">
            <div className="mx-5 pb-10">
                <div className="py-8 lg:py-14 flex flex-col items-center">
                    <span
                        className="text-[#365CCE] text-base"
                    >
                       JoBro
                    </span>
                    <span className="font-semibold text-center text-4xl sm:text-5xl mt-3 mb-6">
                        Compare our all jobs and find yours
                    </span>
                    <span className="sm:text-xl text-center text-lg font-light">
                        Simple, transparent place to compare jobs
                    </span>
                    {/* billing type div */}

                </div>
                <div className="lg:max-w-[1200px] max-w-[450px] mx-auto bg-white rounded-xl">
                    <table className="w-full text-start border-spacing-5 border-separate flex flex-col lg:flex-row p-5 lg:p-0">
                        {pricingData.map((data, index) => (
                            <tbody
                                key={index}
                                className={
                                    index === 0
                                        ? "hidden lg:block"
                                        : "border-2 lg:border-none mb-10 lg:mb-0 rounded-lg"
                                }
                            >
                                <tr>
                                    <td>
                                        <div className="font-semibold text-xl text-[#101828] h-7">
                                            {data.mainTitle}
                                            {data.popular && (
                                                <span
                                                    className="text-sm font-medium text-[#365CCE] px-2.5 py-0.5 bg-[#F9F5FF] rounded-2xl ml-2"
                                                >
                                                    Popular
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="h-[50px]">
                                        <div>
                                            <span className="font-semibold text-5xl">
                                                {monthprice ? data.price?.month : data.price?.year}
                                            </span>
                                            {data.price && (
                                                <span className="text-[#475467] font-normal ml-1">
                                                    {monthprice ? "per month" : "per year"}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="h-[50px] lg:h-[70px] xl:h-[50px]">
                                        <span className="text-[#475467] text-sm font-normal">
                                            {data.infoNote}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    {index === 0 ? (
                                        <td className="h-[50px]"></td>
                                    ) : (
                                        <td>
                                            <button
                                                className="w-full bg-[#365CCE] text-white rounded-lg py-3 font-semibold"
                                            >
                                                Get Started
                                            </button>
                                        </td>
                                    )}
                                </tr>
                                {/* portion after first title */}
                                <tr>
                                    <td
                                        className="h-5 text-sm font-semibold text-[#365CCE]"
                                        colSpan={2}
                                    >
                                        {data.titleRow1}
                                        <span className="lg:hidden">
                                            {pricingData[0]["titleRow1"]}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={
                                            index === 0
                                                ? ""
                                                : "h-7 flex justify-between lg:justify-center flex-row-reverse"
                                        }
                                    >
                                        <span className="text-sm font-semibold text-[#60a5fa]">
                                            {data["Basic Feature"] === true ? (
                                                <>
                                                    <RightIcon bgcolor={`#365CCE`} />
                                                </>
                                            ) : (
                                                <span className="font-medium text-sm text-[#101828] ">
                                                    Basic Feature
                                                </span>
                                            )}
                                        </span>
                                        <span className="lg:hidden">
                                            {pricingData[0]["Basic Feature"]}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={
                                            index === 0
                                                ? "h-5"
                                                : "h-6 text-center flex justify-between lg:justify-center flex-row-reverse"
                                        }
                                    >
                                        <span className="font-medium text-sm text-[#101828]">
                                            {data.Users}
                                        </span>
                                        <span className="lg:hidden">{pricingData[0]["Users"]}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={
                                            index === 0
                                                ? "h-5"
                                                : "h-7 text-center flex justify-between lg:justify-center flex-row-reverse"
                                        }
                                    >
                                        <span className="font-medium text-sm text-[#101828]">
                                            {data["Individual data"]}
                                        </span>
                                        <span className="lg:hidden">
                                            {pricingData[0]["Individual data"]}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={
                                            index === 0
                                                ? "h-7"
                                                : "h-7 flex justify-between lg:justify-center flex-row-reverse"
                                        }
                                    >
                                        {data.Support === true ? (
                                            <>
                                                <RightIcon bgcolor={`#365CCE`} />
                                            </>
                                        ) : (
                                            <span className="font-medium text-sm text-[#101828]">
                                                Support
                                            </span>
                                        )}
                                        <span className="lg:hidden">
                                            {pricingData[0]["Support"]}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <hr />
                                    </td>
                                </tr>
                                {/* portion after second title */}
                                <tr>
                                    <td
                                        className="h-5 text-sm font-semibold text-[#365CCE] whitespace-nowrap"
                                    >
                                        {data.titleRow5}
                                        <span className="lg:hidden">
                                            {pricingData[0]["titleRow5"]}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={
                                            index === 0
                                                ? "h-5"
                                                : "h-7 text-center flex justify-between lg:justify-center flex-row-reverse"
                                        }
                                    >
                                        <span>{data.Analytics}</span>
                                        <span className="lg:hidden">
                                            {pricingData[0]["Analytics"]}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={
                                            index === 0
                                                ? "h-5"
                                                : "h-7 text-center flex justify-between lg:justify-center flex-row-reverse"
                                        }
                                    >
                                        {data["Export Reports"] === true ? (
                                            <RightIcon bgcolor={`#365CCE`} />
                                        ) : (
                                            <span className="font-medium text-sm text-[#101828]">
                                                Export reports
                                            </span>
                                        )}
                                        <span className="lg:hidden">
                                            {pricingData[0]["Export Reports"]}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={
                                            index === 0
                                                ? "h-5"
                                                : "h-7 text-center flex justify-between lg:justify-center flex-row-reverse"
                                        }
                                    >
                                        {data["Api Access"] === true ? (
                                            <RightIcon bgcolor={`#365CCE`} />
                                        ) : data["Api Access"] === false ? (
                                            <LineIcon bgcolor={`#365CCE`} />
                                        ) : (
                                            data["Api Access"]
                                        )}
                                        <span className="lg:hidden">
                                            {pricingData[0]["Api Access"]}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Sample5;
