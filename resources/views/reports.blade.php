@extends('layouts.app')

@section('content')
  <router-view :items="{{ $reports }}"></router-view>
@endsection
