@extends('layouts.app')

@php
  $inputs = json_encode(session()->hasOldInput() ? session()->getOldInput() : new stdClass());
  $messages = json_encode(session()->has('errors') ? session()->get('errors')->getMessages(): new stdClass());
@endphp


@section('content')
  <router-view
    :errors="{{ $messages }}"
    :inputs="{{ $inputs }}"
  ></router-view>
@endsection
