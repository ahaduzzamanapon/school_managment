@extends('website_view.layouts.default')
@section('content')
        <div class="body-wrap">
            <div class="row">
                <div class="col-lg-3 col-md-6 order-2 order-md-2 order-lg-1">
                    <div id="block-13" class="widget side-bar widget_block widget_media_image">
                        <figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="241"
                                height="150"
                                src="{{asset('public/suborno-logo.png')}}"
                                alt class="wp-image-899"
                                srcset="{{asset('public/suborno-logo.png')}}" /></figure>
                    </div>
                    <div class="widget widget_portal_btn">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <h3 class="widget-title m-b10">Online Protal</h3>
                            </div>
                            <div class="card-body">
                                <a class="portal-btn" href="{{url('/admin-dashboard')}}">Online
                                    Protal</a>
                            </div>
                        </div>
                    </div>
                    <div class="widget widget_important_menu">
                        <div class="important-menu-wrap">
                            <div class="card">
                                <div class="card-header bg-primary">
                                    <h3 class="widget-title m-b10">Important Link</h3>
                                </div>
                                <div class="card-body">
                                    <div class="side-menu">
                                        <ul id="menu-important-link" class="sidebar-nav">
                                            <li id="menu-item-1159"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1159">
                                                <a href="https://moedu.gov.bd">Ministry of Education</a>
                                            </li>
                                            <li id="menu-item-1160"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1160">
                                                <a href="https://www.dhakaeducationboard.gov.bd">Dhaka Education
                                                    Board</a>
                                            </li>
                                            <li id="menu-item-1161"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1161">
                                                <a href="https://teachers.gov.bd">শিক্ষক বাতায়ন</a>
                                            </li>
                                            <li id="menu-item-1162"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1162">
                                                <a href="http://konnect.edu.bd">কিশোর বাতায়ন</a>
                                            </li>
                                            <li id="menu-item-1163"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1163">
                                                <a href="https://banbeis.portal.gov.bd">Banbeise</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget widget_portal_btn">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <h3 class="widget-title m-b10">Result</h3>
                            </div>
                            <div class="card-body">
                                <a class="portal-btn" href="#">Exam Result</a>
                            </div>
                        </div>
                    </div>
                    <div class="widget widget_event">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <h3 class="widget-title m-b10">Social Link</h3>
                            </div>
                            <div class="card-body">
                                <ul class="social-icon-version-two">
                                    <li>
                                        <a href="https://facebook.com">
                                            <i class="fab fa-facebook-f"></i>
                                            Facebook </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com">
                                            <i class="fab fa-twitter"></i>
                                            Twitter </a>
                                    </li>
                                    <li>
                                        <a href="http://linkedin.com">
                                            <i class="fab fa-linkedin-in"></i>
                                            Linkedin </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="widget widget_event">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <h3 class="widget-title m-b10">Emergency Number</h3>
                            </div>
                            <div class="card-body">
                                <img src="{{asset('public/emergency-number.png')}}"
                                    alt="emergency-number-update">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 order-1 order-md-1 order-lg-2">
                    <div class="banner-slider slider" id="section2">
                        <div class="banner-image">
                            <img src="{{asset('public/thumb_801_1662_710_0_0_crop.jpg')}}"
                                alt="thumb_801_1662_710_0_0_crop">
                            <div class="banner-con-inner">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="home-banner-content">
                                                <h1 class="banner-title">
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-banner-slider banner-slider slider">
                        <div class="banner-image">
                            <img src="{{asset('public/thumb_801_1662_710_0_0_crop.jpg')}}"
                                alt>
                            <div class="banner-con-inner">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="home-banner-content">
                                                <h1 class="banner-title">
                                                </h1>
                                                <a href="#" id="hoverTuneButton">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-full p-t40 p-b40 massage-notice-wrap">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="massage-wrap mobile-view">
                                        <h2 class="text-uppercase">CHAIRMEN MESSAGE</h2>
                                        <div class="dez-separator bg-primary"></div>
                                        <img src="{{asset('public/manimage.jpg')}}"
                                            alt="Name Chairman" class="img-thumbnail">
                                        <h4>Name Chairman</h4>
                                        <p>Welcome to <strong>AvienTech School &amp; College</strong>, an
                                            educational institute founded and administered by the Congregation of
                                            Holy Cross which has been serving the nation.</p>
                                        <a class="more-button"
                                            href="#">Read More</a>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="massage-wrap">
                                        <h2 class="text-uppercase">PRINCIPAL MESSAGE</h2>
                                        <div class="dez-separator bg-primary"></div>
                                        <img src="{{asset('public/manimage.jpg')}}"
                                            alt="Name Peincipal" class="img-thumbnail">
                                        <h4>Name Peincipal</h4>
                                        <p>Welcome to<strong> AvienTech School &amp; College</strong>, an
                                            educational institute founded and administered by the Congregation of
                                            Holy Cross which has been serving the nation.</p>
                                        <a class="more-button"
                                            href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-full p-t40 p-b40 welcome-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="welcome-content">
                                        <h2>WELCOME TO my College, Dhaka</h2>
                                        <p>At the present time the College receives no financial aid from the
                                            government of Bangladesh. It is supported entirely by tuition fees
                                            collected from the students.</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="gallery-wrap">
                                        <img src="{{asset('public/schoolpic.jpg')}}"
                                            alt class="img-thumbnail">
                                    </div>
                                </div>
                                <div class="col-lg-12 text-center mt-3">
                                    <a class="more-button" href="#">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-full p-t40 p-b40 event-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="widget widget_notice">
                                        <div class="notice-wrap">
                                            <div class="card">
                                                <div class="card-header bg-primary">
                                                    <h3 class="widget-title m-b10">Events</h3> <a
                                                        href="#">View All</a>
                                                </div>
                                                <div class="card-body">
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="#">School
                                                                Events</a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#">Language
                                                                Day</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Victory
                                                                Day</a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#">Independent
                                                                Day</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="widget widget_notice">
                                        <div class="notice-wrap">
                                            <div class="card">
                                                <div class="card-header bg-primary">
                                                    <h3 class="widget-title m-b10">News</h3> <a
                                                        href="#">View All</a>
                                                </div>
                                                <div class="card-body">
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="#">Lorem
                                                                Ipsum is simply dummy text of the printing and
                                                                typesetting industry.</a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#">Lorem
                                                                Ipsum is simply dummy text of the printing and
                                                                typesetting industry.</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 order-3 order-md-3 order-lg-3">
                    <div id="block-14" class="widget side-bar widget_block widget_media_image">
                        <figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="218"
                                height="150"
                                src="{{asset('public/mujib.png')}}"
                                class="wp-image-900"
                                srcset="{{asset('public/mujib.png')}}"
                                /></figure>
                    </div>
                    <div class="widget widget_notice">
                        <div class="notice-wrap">
                            <div class="card">
                                <div class="card-header bg-primary">
                                    <h3 class="widget-title m-b10">Notice</h3> <a
                                        href="#">View All</a>
                                </div>
                                <div class="card-body">
                                    <ul>
                                        <li>
                                            <a
                                                href="#">Production,
                                                Storage, Transfer, Transport, Supply, Distribution and Marketing</a>
                                        </li>
                                        <li>
                                            <a
                                                href="#">Regarding
                                                attending the hearing with necessary documents.</a>
                                        </li>
                                        <li>
                                            <a
                                                href="#">Meeting
                                                to review the draft policy regarding tuition</a>
                                        </li>
                                        <li>
                                            <a
                                                href="#">Sent
                                                Up I (Promotion) Exam Routine</a>
                                        </li>
                                        <li>
                                            <a
                                                href="#">Tuition
                                                fee payment method through Rocket and Nexus Pay</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget widget_calender">
                        <div class="notice-wrap">
                            <div class="card">
                                <div class="card-header bg-primary">
                                    <h3 class="widget-title m-b10">Calendar</h3>
                                </div>
                                <div class="card-body">
                                    <div class="calender-wrap">
                                       <div id="calendar" class="calendar">
                                         <!-- Calendar will be added here -->
                                       </div>
                                       
                                       <script>
                                         $(document).ready(function() {
                                           // Add calendar logic here
                                           // You can use any jQuery calendar plugin of your choice
                                           
                                           // For example, let's use jQuery UI Datepicker plugin
                                           $('#calendar').datepicker();
                                         });
                                       </script>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget widget_gallery">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <h3 class="widget-title m-b10">Gallery</h3> <a
                                    href="#">View
                                    All</a>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <img width="195" height="110"
                                        src="{{asset('public/schoolpic.jpg')}}"
                                            class="attachment-home_gallery_image size-home_gallery_image wp-post-image"
                                            alt decoding="async" />
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <img width="195" height="110"
                                        src="{{asset('public/schoolpic.jpg')}}"
                                            class="attachment-home_gallery_image size-home_gallery_image wp-post-image"
                                            alt decoding="async" />
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <img width="195" height="110"
                                        src="{{asset('public/schoolpic.jpg')}}"
                                            class="attachment-home_gallery_image size-home_gallery_image wp-post-image"
                                            alt decoding="async" />
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <img width="195" height="110"
                                        src="{{asset('public/schoolpic.jpg')}}"
                                            class="attachment-home_gallery_image size-home_gallery_image wp-post-image"
                                            alt decoding="async" />
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <img width="179" height="110"
                                        src="{{asset('public/schoolpic.jpg')}}"
                                            class="attachment-home_gallery_image size-home_gallery_image wp-post-image"
                                            alt decoding="async"
                                            />
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <img width="179" height="110"
                                        src="{{asset('public/schoolpic.jpg')}}"
                                            class="attachment-home_gallery_image size-home_gallery_image wp-post-image"
                                            alt decoding="async"
                                           />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @stop