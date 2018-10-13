import os
import pytest
from webApp import app
import sure


def test_home(client):
    res = client.get('/')
    (res.status_code).should.equal(200)
